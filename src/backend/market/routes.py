from flask import Blueprint, jsonify, request 
from flask_login import login_user, logout_user, current_user

from market.models import Item, User
from market.config import db

blueprint = Blueprint("market", __name__)

@blueprint.post("/market")
def market_post():
    if current_user.is_authenticated:
        purchased_item = request.form.get('purchased_item')
        p_item_obj = Item.query.filter_by(name=purchased_item).first()
        if p_item_obj:
            if current_user.can_afford(p_item_obj):
                p_item_obj.buy(current_user)
                return jsonify({"message": "Item purchased successfully"}), 200
            else: 
                return jsonify({"message": "You can't afford this item"}), 400
        else: 
            return jsonify({"message": "Item does not exist"}), 404
    else: 
        return jsonify({"message": "You have to log in first"}), 400        
   

@blueprint.get("/market")
def market_page():
    print(current_user.username)
    items_query = Item.query.filter_by(forsale=1).all()
    items = [{"id": item.id, "name": item.name, "price": item.price, "owner": item.owner} for item in items_query]

    if current_user.is_authenticated:
        owned_items_query = Item.query.filter_by(owner=current_user.id).all()
        owned_items = [{"id": item.id, "name": item.name, "price": item.price, "owner": item.owner} for item in owned_items_query]
    else:
        owned_items = []

    return jsonify({
        "items": items,
        "owned_items": owned_items
    }), 200

@blueprint.post("/register")
def register_page():
    data = request.get_json()
    if User.query.filter_by(username=data['username']).first():
        return jsonify({"message": "Username already exists"}), 400
    user_to_create = User(username=data['username'],
                            email_adress=data['email'],
                            password=data['password'])
    db.session.add(user_to_create)
    db.session.commit()
    login_user(user_to_create)
    return jsonify({"message": "User created successfully"}), 201

@blueprint.post('/login')
def login_page():
    data = request.get_json()
    attempted_user = User.query.filter_by(username=data['username']).first()
    if attempted_user and attempted_user.chech_password_correction(
        attempted_password=data['password']):
        login_user(attempted_user)
        return jsonify({"message": "Login successful"}), 200
    else: 
        return jsonify({"message": "Invalid credentials"}), 401

@blueprint.post('/logout')
def logout_page():
    logout_user()
    return jsonify({"message": "Logged out successfully"}), 200

@blueprint.get('/profile/<username>')
def profile(username):
    user = User.query.filter_by(username=username).first()
    if user == None:
        return jsonify({"message": "User not found"}), 404
    owned_items = Item.query.filter_by(owner=user.id)
    if owned_items.count() == 0:
        owned_items = 0
    return jsonify({
        "username": user.username,
        "email_adress": user.email_adress,
        "owned_items": owned_items
    }), 200

@blueprint.post('/profile/<username>')
def profile_post(username):
    user = User.query.filter_by(username=username).first()
    if user == None:
        return jsonify({"message": "User not found"}), 404

    if current_user.username == username:
        sold_item = request.form.get('item_name')
        p_item_obj = Item.query.filter_by(name=sold_item).first()
        if p_item_obj:
            response = p_item_obj.tougle_sale()
            if response:
                return jsonify({"message": "Item is for sale now"}), 200
            else:
                return jsonify({"message": "Item is not for sale anymore"}), 200
        else:
            return jsonify({"message": "Item does not exist"}), 404
    else: 
        return jsonify({"message": "You can't sell items for other users"}), 400

@blueprint.post("/create_item")
def create_item_page():
    data = request.get_json()
    item_to_create = Item(name=data['name'],
                            price=data['price'],
                            description=data['description'],
                            owner=current_user.id,
                            forsale=True)
    db.session.add(item_to_create)
    db.session.commit()
    return jsonify({"message": "Item created successfully"}), 201
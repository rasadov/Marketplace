import sys

sys.path.append('backend')

from market.config import app

if __name__ == '__main__':
    app.run(debug=True)

export default function login() {
    return (
        <>
<body style="text-align:center;">
    <h1 style="margin-left: auto; margin-right: auto; text-align: center;">Login Form</h1>
    <section style="margin-left: auto; margin-right: auto; border-radius: 20px; margin-top: 75px; background: linear-gradient(blue, rgb(104, 104, 249), cyan);
        width: 500px; height: auto; text-align: center;">
            <div class="container" style="width: 450px; text-align: center; margin-left: auto; margin-right: auto;">
                <div style="height: 30px;"></div>
                    <h1 class="h3 mb-3 font-weight-normal" style="text-align: center; font-size: 40px; ">
                        <strong> Log Into Account </strong>
                    </h1>
                    <form method="POST" class="form-signin" style="color:white">
                        <div class="checkbox mb-3">
                            <h6>Do not have an account?</h6>
                            <a class="btn btn-sm btn-secondary" href="/register">Register</a>
                        </div>
                        
                        
                    </form>
                </div>
                <div style="height: 30px;"></div>
    </section>
    </body>
    </>
    );
}

export default function register() {
    return (
        <>
        <body style="text-align:center;">
    <h1 style="margin-left: auto; margin-right: auto; text-align: center;">Register Form</h1>
    <section style="margin-left: auto; margin-right: auto; border-radius: 20px; margin-top: 75px; 
    background: linear-gradient(blue, rgb(104, 104, 249), cyan);
        width: 500px; height: auto; text-align: center;">
            <div class="container" style="width: 450px; text-align: center; margin-left: auto; margin-right: auto;">
                <form method="POST" class="form-register" style="color: white;">
                    <div style="height: 30px;"></div>
                    <h1 class="h3 mb-3 font-weight-normal" style="text-align: center; font-size: 40px; ">
                        <strong> Create Your Account</strong>
                    </h1>
                <div style="height: 30px;"></div>
                
                <div style="height: 30px;"></div>
                
                <div style="height: 30px;"></div>
                <div style="height: 30px;"></div> 
                <div class="checkbox mb-3">
                    <h6>Already have an account?</h6>
                    <a class="btn btn-sm btn-secondary" href="{{ url_for('login_page') }}">Sign in</a>
                </div>
            </form>
                </div>
                <div style="height: 30px;"></div>
        </section>
    </body>

        </>
    );
}
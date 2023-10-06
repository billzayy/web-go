function LoginFill() { 
    return (
        <div className="login-fill">
            <div className="login-email-fill">
                <p className="email-fill-title">Email</p>
                <input type="text" className="email-fill-box" />
            </div>
            <div className="login-password-fill">
                <p className="password-fill-title">Password</p>
                <input type="password" className="password-fill-box" />
            </div>
            <div className="login-fill-option">
                <div className="remember-btn">
                    <input type="checkbox" className="checkbox"/>
                    <p className="checkbox-title"> Remember me </p>
                </div>
                <div className="forget-btn">
                    <p href="/">Forgot password</p>
                </div>
            </div>
            <div className="buttons-login">
                <button> Login </button>
                <button> Sign Up </button>
            </div>
        </div>
    )
}

export default LoginFill
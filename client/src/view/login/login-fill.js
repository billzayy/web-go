import getValueBox from '../../controller/login'

function LoginFill() { 
    return (
        <div className="login-fill">
            <div className="login-email-fill">
                <p className="fill-title-email">Email</p>
                <input type="text" className="fill-box-email" />
            </div>
            <div className="login-password-fill">
                <p className="fill-title-password">Password</p>
                <input type="password" className="fill-box-password" />
            </div>
            <div className="login-fill-option">
                <div className="remember-btn">
                    <input type="checkbox" className="checkbox"/>
                    <p className="checkbox-title"> Remember me </p>
                </div>
                <div className="forget-btn">
                    <p href="/">Forgot password?</p>
                </div>
            </div>
            <div className="buttons-login">
                <button type="button" className="login-btn" onClick={getValueBox}> Login </button>
                <button className="signup-btn"> Sign Up </button>
            </div>
        </div>
    )
}

export default LoginFill
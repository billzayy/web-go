import Logo from "../img/Logo.png"
import DayImg from "../img/day66travel.png"
import "../css/Login_Box.css"

function LoginBox() { 
    return (
        <div className="login-box">
            <div className="login-left">
                <div className="logo-box">
                    <img className="logo-login" src={Logo} alt="logo" />
                    <p className="logo-name"> Login </p>
                </div>
                <div className="login-title">
                    <p className="title-quotes">Artificial Intelligence giving you travel recommendations</p>
                    <p className="title-greeting">Welcome Back, Please login to your account</p>
                </div>
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
                            <input type="checkbox" />
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
                <div className="login-options">
                    <p className="options-title">Or, login with</p>
                    <p className="options-fb">Facebook</p>
                    <p className="options-linkedIn">Linked In</p>
                    <p className="options-google">Google</p>
                </div>
            </div>
            <div className="login-right">
                <img className="day-image" src={DayImg} alt="Day Travel"/>
            </div>
        </div>
    )
}

export default LoginBox
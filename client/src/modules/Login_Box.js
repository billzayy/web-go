import DayImg from "../view/img/day66travel.png"
import "../css/Login_Box.css"

import LoginTitle from "../view/login/login-title"
import LoginOption from "../view/login/login-options"
import LogoBox from "../view/login/logo-box"
import LoginFill from "../view/login/login-fill"

function LoginBox() {
    return (
        <div className="login-box">
            <div className="login-left">
                <LogoBox />
                <LoginTitle />
                <LoginFill />
                <LoginOption />
            </div>
            <div className="login-right">
                <img className="day-image" src={DayImg} alt="Day Travel"/>
            </div>
        </div>
    )
}

export default LoginBox
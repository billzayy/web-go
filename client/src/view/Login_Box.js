import DayImg from "../img/day66travel.png"
import "../css/Login_Box.css"

import LoginTitle from "./login-title"
import LoginOption from "./login-options"
import LogoBox from "./logo-box"
import LoginFill from "./login-fill"
// import React, { useEffect, useState } from "react"

function LoginBox() {
    // const [users, setUsers] = useState([])
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
import Logo from "../img/Logo.png"

function LogoBox(){
    return (
        <div className="logo-box">
            <img className="logo-login" src={Logo} alt="logo" />
            <p className="logo-name"> Login </p>
        </div>
    )
}

export default LogoBox
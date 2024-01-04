import ReactLogo from "./Images/logo512.png";

const Header = () => {
    return (
        // <div className="pt3-3 pl-2">
        //     <img src={ReactLogo} alt="" style={{height: "35px", verticalAlign: "top"}}/>
        //     <span className="h2 pt-4 text-white-50">React Course - CountOpedia</span>
        // </div>

        <div className="py-3 pl-2" style={{borderBottom: "1px solid #777"}}>
            <img src={ReactLogo} alt="" style={{height: "35px", verticalAlign: "top"}}/>
            <span className="h2 pt-4 mx-2 text-white">React Course - CountOpedia</span>
        </div>
    );
}

export default Header;
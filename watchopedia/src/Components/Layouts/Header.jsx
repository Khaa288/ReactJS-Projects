import ReactLogo from "../../Images/logo512.png";

const Header = () => {
    return (
        <div className="py-3 pl-2" style={{borderBottom: "1px solid #777"}}>
            <img src={ReactLogo} alt="" style={{height: "35px", verticalAlign: "top"}}/>
            <span className="h2 pt-4 mx-2 text-white">React Course - WatchOpedia</span>
        </div>
    );
}

export default Header;
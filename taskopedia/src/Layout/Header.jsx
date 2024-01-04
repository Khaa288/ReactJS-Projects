import logo from "../Images/react.png";

const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
};
  
const MainHeader = () => {
    return (
      <div className="pt-2 py-1 pl-2" style={{backgroundColor: "black"}}>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top"}}/>
        <span className="h2 pt-4 text-white-50">React Course</span>
      </div>
    );
};
  
const SubHeader = () => {
    return <p style={subHeaderStyle} className="text-center">This course is gonna interesting</p>
};
  
const Header = () => {
    return(
      <div>
        <MainHeader/>
        <SubHeader/>
      </div>
    )
};

export default Header;
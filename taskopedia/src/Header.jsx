const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
};
  
function MainHeader() {
    return <h1 className="heading1">REACT COURSE</h1>
};
  
function SubHeader() {
    return <p style={subHeaderStyle}>This course is gonna interesting</p>
};
  
function Header() {
    return(
      <div>
        <MainHeader/>
        <SubHeader/>
      </div>
    )
};

export default Header
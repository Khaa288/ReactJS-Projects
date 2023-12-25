import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Student from './Student';

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return(
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building 
        <br />
        Total Lecture - {lectureCount}
      </p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walmart</li>
      </ul>

      {/* <div>
        Enter task: <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div> */}
    </div>
  );
};

function Footer() {
  return(
    <p>Happy Coding</p>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Header/>
    <MainBody/>
    <div className="row">Student Enrolled</div>
    <Student fullName="Kris Vale" experience={3} headshot="https://api.lorem.space/image/game?w=150&h=220"/>
    <Student fullName="V Khaa" experience={4} headshot="https://api.lorem.space/image/game?w=150&h=220"/>
    <Student fullName="Jon Mos" experience={5} headshot="https://api.lorem.space/image/game?w=150&h=220"/>
    <Footer/>
  </div>
);

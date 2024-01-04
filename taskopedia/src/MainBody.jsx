import Student from "./Components/Student";
import StudentReview from "./Components/StudentReview";

export default function MainBody() {
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
  
        <div className="container row">Student Enrolled</div>
        <Student fullName="Kris Vale" experience={3} headshot="https://api.lorem.space/image/game?w=150&h=220"><StudentReview></StudentReview></Student>
        <Student fullName="V Khaa" experience={4} headshot="https://api.lorem.space/image/game?w=150&h=220"><StudentReview></StudentReview></Student>
        <Student fullName="Jon Mos" experience={5} headshot="https://api.lorem.space/image/game?w=150&h=220"><StudentReview></StudentReview></Student>
      </div>
    );
};
  
import React from "react";
import getRandomUser from "./Utilities/Api";
import Instructor from "./Instructor";

class Cyclopedia extends React.Component {
    constructor(props) {
        super(props);

        this.state = JSON.parse(localStorage.getItem("cyclePediaState")) || {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: "",
            inputFeedback: ""
        }
    }

    componentDidMount = async () => {
        console.log('Mount');
        if (JSON.parse(localStorage.getItem("cyclePediaState"))) {
            this.setState(JSON.parse(localStorage.getItem("cyclePediaState")));
        }

        else {
            const response = await getRandomUser();
        
            this.setState((prevState) => {
                return (
                    {
                        instructor: {
                            name:   `${response.data.first_name} ${response.data.last_name}`,
                            email: response.data.email,
                            phone: response.data.phone_number
                        }
                    }
                );
            });
        }
    };

    componentDidUpdate = async(previousProps, previousState) =>  {
        console.log('Update');
        localStorage.setItem("cyclePediaState", JSON.stringify(this.state));

        console.log("Old State - " + previousState.studentCount);
        console.log("New State - " + this.state.studentCount);

        if (previousState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();
            this.setState((prevState) => {
                return {
                    studentList: [
                        ...prevState.studentList, {
                            name: response.data.first_name + " " + response.data.last_name
                        }
                    ]
                } 
            })
        }

        else if (previousState.studentCount > this.state.studentCount){
            this.setState((prevState) => {
                return {
                    studentList: []
                }
            });
        }
    };

    componentWillUnmount() {
        console.log('Will Unmount');
    };

    handleAddStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: prevState.studentCount + 1
            };
        });
    };

    handleRemoveAllStudents = () => {
        this.setState((prevState) => {
            return {
                studentCount: 0
            };
        });
    };

    handleToggleInstructor = () => {
        this.setState((prevState) => {
            return {
                hideInstructor: !prevState.hideInstructor
            };
        })
    }

    render() {
        console.log('Render Component');
        return(
            <div>
                <div className="p-3">
                    <span className="h4 text-success">
                        Instructor
                    </span>
                    &nbsp;
                    <i 
                        className={`bi ${this.state.hideInstructor? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`}
                        onClick = {this.handleToggleInstructor}
                    ></i>

                    {
                        !this.state.hideInstructor && this.state.instructor ? <Instructor instructor={this.state.instructor}/> : null
                    }
                </div>

                <div className="p-3">
                    <span className="h4 text-success">Feedback</span> <br />
                    <input 
                        type = "text" 
                        placeholder = "Name..." 
                        value = {this.state.inputName}
                        onChange={(e) => {this.setState({inputName: e.target.value})}}
                    ></input> Value: { this.state.inputName }<br />
                    
                    <textarea 
                        placeholder="Feedback..."
                        value = {this.state.inputFeedback}
                        onChange={(e) => {this.setState({inputFeedback: e.target.value})}}
                    ></textarea> Value: {this.state.inputFeedback}
                </div>

                <div className="p-3">
                    <span className="h4 text-success">Students</span>
                    <br />
                    <div>
                        Student Course: {this.state.studentCount}
                    </div>

                    <button 
                        className = "btn btn-success btn-sm"
                        onClick = {this.handleAddStudent}
                    >
                        Add Student
                    </button>
                    &nbsp;
                    <button
                        className="btn btn-danger btn-sm"
                        onClick = {this.handleRemoveAllStudents}
                    >
                        Remove All Students
                    </button>

                    {this.state.studentList.map((student) => {
                        return (
                            <div className="text-white">- Student Name: {student.name}</div>
                        );
                    })}
                </div>
            </div>
        );
    };
};

export default Cyclopedia;
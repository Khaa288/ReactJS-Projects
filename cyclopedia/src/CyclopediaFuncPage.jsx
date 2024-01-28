import React, { useEffect, useRef, useState } from "react";
import getRandomUser from "./Utilities/Api";
import Instructor from "./InstructorFunc";

const CyclopediaFunc = () => {
    const [inputName, setInputName] = useState(() => "");
    const [inputFeedback, setInputFeedback] = useState(() => "");
    const [state, setState] = useState(() => {
        return {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
        }
    });

    useEffect(() => {
        const getUser = async () => {
            const response = await getRandomUser();
    
            setState((prevState) => {
                return (
                    {
                        ...prevState,
                        instructor: {
                            name:   `${response.data.first_name} ${response.data.last_name}`,
                            email: response.data.email,
                            phone: response.data.phone_number
                        }
                    }
                );
            });
        };

        if (!state.hideInstructor) {
            getUser();
        }

    }, [state.hideInstructor]);

    useEffect(() => {
        const getStudents = async () => {
            const response = await getRandomUser();
    
            setState((prevState) => {
                return (
                    {
                        ...prevState,
                        studentList: [...prevState.studentList, {name: response.data.first_name + " " + response.data.last_name}]
                    }
                );
            });
        };

        if (state.studentList.length <= state.studentCount) {
            console.log(state.studentList.length)
            console.log(state.studentCount)

            getStudents();
        }

        else if (state.studentList.length > state.studentCount){
            console.log(state.studentList.length)
            console.log(state.studentCount)

            setState((prevState) => {
                return {
                    ...prevState, studentList: []
                }
            });
        }
    }, [state.studentCount]);

    const handleAddStudent = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: prevState.studentCount + 1
            };
        });
    };

    const handleRemoveAllStudents = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: 0
            };
        });
    };

    const handleToggleInstructor = () => {
        setState((prevState) => {
            return {
                ...prevState,
                hideInstructor: !prevState.hideInstructor
            };
        })
    }

    return(
        <div>
            <div className="p-3">
                <span className="h4 text-success">
                    Instructor
                </span>
                &nbsp;
                <i 
                    className={`bi ${state.hideInstructor? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`}
                    onClick = {handleToggleInstructor}
                ></i>

                {
                    !state.hideInstructor && state.instructor ? <Instructor instructor={state.instructor}/> : null
                }
            </div>

            <div className="p-3">
                <span className="h4 text-success">Feedback</span> <br />
                <input 
                    type = "text" 
                    placeholder = "Name..." 
                    value = {inputName}
                    onChange={(e) => {setInputName(e.target.value)}}
                ></input> Value: { inputName }<br />
                
                <textarea 
                    placeholder="Feedback..."
                    value = {inputFeedback}
                    onChange={(e) => {setInputFeedback(e.target.value)}}
                ></textarea> Value: {inputFeedback}
            </div>

            <div className="p-3">
                <span className="h4 text-success">Students</span>
                <br />
                <div>
                    Student Course: {state.studentCount}
                </div>

                <button 
                    className = "btn btn-success btn-sm"
                    onClick = {handleAddStudent}
                >
                    Add Student
                </button>
                &nbsp;
                <button
                    className="btn btn-danger btn-sm"
                    onClick = {handleRemoveAllStudents}
                >
                    Remove All Students
                </button>

                {state.studentList.map((student, index) => {
                    return (
                        <div className="text-white" key={index}>- Student Name: {student.name}</div>
                    );
                })}
            </div>
        </div>
    );
};

export default CyclopediaFunc;
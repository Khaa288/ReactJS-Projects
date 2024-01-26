import { useState } from "react";

const AddMovie = (props) => {
    const [newMovieState, setNewMovieState] = useState(() => "");

    const handleSubmitForm = (e, newMovie) => {
        e.preventDefault();
        props.addMovie(newMovie);
        setNewMovieState("");
    }

    return (
        <div>
            <form onSubmit={(e) =>  {handleSubmitForm(e, newMovieState)}}>
                <div className="row text-white">
                    <div className="col-12 text-center py-1 h4 text-success">
                        Add Movie
                    </div>

                    <div className="col-8 offset-1">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Movie Name..."
                            value={newMovieState}
                            onChange={(e) => setNewMovieState(e.target.value)}
                        />
                    </div>

                    <div className="col-2">
                        <button className="btn btn-success">Add</button>
                    </div>

                    <hr className="mt-3"/>
                </div>
            </form>
        </div>
    );
};

export default AddMovie;
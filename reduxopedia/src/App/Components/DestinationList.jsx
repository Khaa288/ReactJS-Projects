import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {destinationClicked} from "../../Redux/Slices/DestinationSlice";

function DestinationList() {
    const destinationList = useSelector((state) => state.destinationStore.destinations);
    const dispatch = useDispatch();

    return (
        <div className="p-4 border text-center">
            <h4 className="text-success">Destination List</h4>
            {
                destinationList.map((destination, index) => {
                    return (
                        <div 
                            className="text-center text-white row"
                            style={{borderBottom: "1px solid #333"}}
                            key={index}
                        >
                            <div className="col-8 col-md-3 pt-2 offset-md-3">{destination.name}</div>
                            <div className="col-4 col-md-2">
                                <button 
                                    className="btn btn-success form-control m-1"
                                    onClick={() => dispatch(destinationClicked(destination))}
                                >
                                    Detail
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>  
    );
};

export default DestinationList;
import React, { useState } from 'react';
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from '../Api/DestinationAPI';

function Destination({destination}) {
    const [deleteDestination, results] = useDeleteDestinationMutation();
    const [updateDestination] = useUpdateDestinationMutation();

    const [isUpdating, setIsUpdating] = useState(() => false);
    
    const [newCity, setNewCity] = useState(() => "");
    const [newCountry, setNewCountry] = useState(() => "");
    const [newDaysNeeded, setNewDaysNeeded] = useState(() => "");

    const handleDeleteDestination = (destinationId) => {
        deleteDestination({id: destinationId})
    }

    const handleUpdateDestination = (destination) => {
        updateDestination(destination);
        setIsUpdating(!isUpdating);
    }

    return (
        <div className="container">
            <div className="row py-1" style={{borderTop: "1px solid #333", borderBottom: "1px solid #333" }} key={destination.id}>
                <div className="col col-md-4 text-white-50 offset-2">
                    {!isUpdating ? (<div>{destination.city}, {destination.country}</div>) : 
                        (<div className="row">
                            <div className="col-6 p-1">
                                <input 
                                    className="form-control" 
                                    type="text" defaultValue={destination.city} 
                                    onChange={(e) => setNewCity(e.target.value)}
                                />
                            </div>
                            <div className="col-6 p-1">
                                <input 
                                    className="form-control" 
                                    type="text" defaultValue={destination.country} 
                                    onChange={(e) => setNewCountry(e.target.value)}
                                />
                            </div>
                        </div>)
                    }
                </div>

                <div className="col col-md-1 text-warning">
                    {!isUpdating ? (<div>{destination.daysNeeded} days</div>) : 
                        <div className="p-1">
                            <input 
                                className="form-control" 
                                type="text" defaultValue={destination.daysNeeded} 
                                onChange={(e) => setNewDaysNeeded(e.target.value)}
                            />
                        </div>
                    }
                </div>

                <div className="col col-md-2">
                    <button 
                        className= {isUpdating ? "btn btn-primary m-1" : "btn btn-warning m-1"}
                        onClick={() => {
                            return isUpdating ? handleUpdateDestination({...destination, city: newCity, country: newCountry, daysNeeded: newDaysNeeded}) : setIsUpdating(!isUpdating)
                        } }
                    >
                        {isUpdating ? "Update" : "Edit"}
                    </button>

                    <button 
                        className= {isUpdating ? "btn btn-secondary m-1" : "btn btn-danger m-1"}
                        onClick={() => {
                            return isUpdating ? setIsUpdating(!isUpdating) : handleDeleteDestination(destination.id)
                        }}
                    >
                        {isUpdating ? "Cancle" : "Delete"}
                    </button>                 
                </div>
            </div>
        </div>
    )
}

export default Destination

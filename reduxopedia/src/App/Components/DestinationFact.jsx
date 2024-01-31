import React from 'react'
import { useSelector } from 'react-redux'

function DestinationFact() {
    const selectedDestination = useSelector((state) => state.destinationStore.destinationSelected);

    return (
        <div>
            {
                selectedDestination == undefined ? 
                (
                    <div className="text-center pt-4 text-warning">Select a destination</div>
                ) : 
                
                (
                    <div className="text-center border p-3 m-3 text-white">
                        <h4 className="text-success">
                            {selectedDestination.name}
                        </h4>
        
                        Day recommended: {selectedDestination.days} <br />
                        Fun fact: {selectedDestination.fact}
                    </div>
                )
            }
        </div>
    )
}

export default DestinationFact

import React from 'react'
import { useGetRandomDestinationQuery } from '../Api/RandomDestinationAPI'

function RandomDestination() {
    const {data, isLoading, isSuccess, isError, error} = useGetRandomDestinationQuery();

    let content;

    if (isLoading) {
        content = <div>Loading...</div>;
    }

    else if (isSuccess) {
        content = (
            <div className="text-center border p-3">
                <h4 className="text-success">
                    Random Travel Suggestion: 
                </h4>

                {data.city}, {data.country}
            </div>
        )
    }

    else if (isError) {
        content = <div>{error}</div>
    }

    return (
        <div className="pt-3">
            {content}
        </div>
    )
}

export default RandomDestination;

import React from 'react';
import { useGetAllDestinationQuery } from '../Api/DestinationAPI';
import Destination from './Destination';

function DestinationList() {
    const {data, isLoading, isSuccess, isError, error} = useGetAllDestinationQuery();
    
    let content;

    if (isLoading) {
        content = <div>Loading...</div>
    }

    else if (isSuccess) {
        content = data.map((value) => {
            return (
                <Destination destination={value}/>
            );
        })
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

export default DestinationList

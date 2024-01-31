import React from 'react';
import { useDispatch } from 'react-redux';
import { resetReduxOpedia } from '../../Redux/Actions/Action';

function ResetApp() {
    const dispatch = useDispatch();

    return (
    <div className="text-center">
        <button 
            className="btn btn-warning"
            onClick={() => {
                dispatch(resetReduxOpedia());
            }}
        >
            Reset App
        </button>
    </div>
    )
}

export default ResetApp

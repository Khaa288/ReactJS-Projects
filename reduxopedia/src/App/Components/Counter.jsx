import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementMultiplier, increment, incrementMultiplier } from '../../Redux/Slices/CounterSlice';

function Counter() {
    const count = useSelector((state) => state.counterStore.count);
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);

    return (
        <div className="mt-2 pt-3 pl-2 text-center text-white" style={{borderTop: "1px solid #999"}}>
            <h1>Counter: {count}</h1>

            <div className="row">
                <div className="p-4 col-12 col-md-6">
                    <div className="border p-4">
                        <h4>Basic Counter</h4>
                        <button 
                            className="btn btn-primary"
                            onClick={() => dispatch(increment())}
                        >
                            Add
                        </button>
                        &nbsp;
                        <button 
                            className="btn btn-danger"
                            onClick={() => dispatch(decrement())}
                        >
                            Remove
                        </button>
                    </div>
                </div>

                <div className="p-4 col-12 col-md-6">
                    <div className="border p-4">
                        <h4>Input Counter</h4>
                        <div className="row">
                            <div className="col-4">
                                <input 
                                    type="test" 
                                    placeholder="Multiplier..." 
                                    className="form-control"
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>

                            <div className="col-4">
                                <button 
                                    className="btn btn-primary form-control"
                                    onClick={() => dispatch(incrementMultiplier(number))}
                                >
                                    Add
                                </button>
                            </div>

                            <div className="col-4">
                                <button 
                                    className="btn btn-danger form-control"
                                    onClick={() => dispatch(decrementMultiplier(number))}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Counter

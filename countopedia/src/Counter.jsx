import React from "react";
import Attack from "./Images/attack.png";
import Defend from "./Images/defend.png";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            status: "", 
            lastPlay: ""
        }

        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefend = this.handleDefend.bind(this);
    };

    handleAttack = () => {
        this.setState((state) => {
            let newCount = state.count + Math.round(Math.random() * 10);

            return {
                status: newCount >= 20 ? "Attacked" : "",
                count: newCount,
                lastPlay: "Attack"
            };
        });
    };

    handleDefend = () => {
        this.setState((state) => {
            let newCount = state.count - Math.round(Math.random() * 10);

            return {
                status: newCount <= -20 ? "Defended" : "",
                count: newCount,
                lastPlay: "Defend"
            };
        });
    };

    handReset = () => {
        this.setState((state) => {
            return {
                status: "",
                count: 0,
                lastPlay: ""
            }
        });
    }

    render() {
        return(
            <div className="row text-center text-white">
                <h1>Game Score: {this.state.count}</h1>
                <p>You win at +20 points and loose at -20 points!</p>
                <p>Last play: {this.state.lastPlay}</p>
                <p className="h3">Game Status: {this.state.status}</p>

                <div className="col-6">
                    <img 
                        src={Attack} 
                        style={{width: "300px", height: "300px", cursor: "pointer", border: "2px solid #CCFFFF"}}
                        className="p-4 rounded img-fluid"
                        onClick={this.handleAttack}
                        alt=""
                    />
                </div>

                <div className="col-6">
                    <img 
                        src={Defend} 
                        style={{width: "300px", height: "300px", cursor: "pointer", border: "2px solid pink"}}
                        className="p-4 rounded img-fluid"
                        onClick={this.handleDefend}
                        alt=""
                    />
                </div>

                <div className="col-12 col-md-4 offset-md-4 pt-4">
                    {/* <button className="btn btn-secondary w-100 mt-2">Random Play</button>
                    <br /> */}
                    <button className="btn btn-warning w-100 mt-2" onClick={this.handReset}>Reset</button>
                </div>
            </div>
        );
    };
}

export default Counter;
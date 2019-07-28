import React from "react";
import "./style.css";



function Card(props) {

    return (
        <div>
            <div className="card" style="width: 18rem;">
                <img src={props.image} class="card-img-top" alt={props.name}></img>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                </div>
            </div>
        </div>
    )
}



export default Card;
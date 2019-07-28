import React from "react";

function Cardholder(props) {
    return (
        <div className="container mb-4">{props.children}
        </div>
    )
}

export default Cardholder
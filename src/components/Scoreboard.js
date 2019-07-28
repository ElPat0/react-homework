import React from "react";

function Scoreboard(){
  
return(
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center m-4">Scoreboard</h1>
    <div className="row">
      <ul className="list-group-horizontal flex-fill text-center">
        <li className="list-group-item flex-fill">
          <h2>Clicky Game</h2>
        </li>
        <li className="list-group-item flex-fill">
          <h3>{!props.guess ? "" : props.guess === "true" ? "Incorrect" : "Correct!"}</h3>
        </li>
      </ul>
    </div>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
)
};

export default Scoreboard
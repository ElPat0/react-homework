import React from "react";

function Scoreboard(props){
  
return(
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center m-4">Scoreboard</h1>
    <p className="lead">Score: {props.score}</p>
    <div className="row">
      <ul className="list-group-horizontal flex-fill text-center">
        <li className="list-group-item flex-fill">
          <h2>React Game</h2>
        </li>
        <li className="list-group-item flex-fill">
          <h3>{!props.guess ? "" : props.guess === "true" ? "Incorrect" : "Correct!"}</h3>
        </li>
      </ul>
    </div>
    
  </div>
</div>
)
};

export default Scoreboard
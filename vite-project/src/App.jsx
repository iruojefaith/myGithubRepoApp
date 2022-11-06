import React from "react";
import { Link } from "react-router-dom";


function App() {


  return (


    <div className="main-container">
    <h1>welcome</h1>
         <Link to={`/`}>Home</Link>

         <Link to="/components"><button>View Here</button></Link>
    </div>

  );
}

export default App;

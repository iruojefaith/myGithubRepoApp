import React from 'react'
import FiSearch  from "react-icons/fi"
function Topbar() {
  return (
     <div className="topbar">
        <div className='topbar_box'>
        <div className="App_logo">
                <h1>MY REPO DASHBOARD</h1>
            </div>

            <div className="search">
                <label >
                    <input type="text" placeholder="Search here" />
                    <FiSearch />
                </label>
            </div>
            </div>




        </div>
  );
}

export default Topbar
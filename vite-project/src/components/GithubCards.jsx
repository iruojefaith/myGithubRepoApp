import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Pagination  from "../utillitis/Pagination";

import TopBar from "../layouts/Topbar";
import Sidebar from "../layouts/Sidebar";



import "./githubcard.css"





const GithubCards = ({ apiResult }) => {
  const [postPerPage] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const ModifiedRepostate = apiResult?.slice(
    indexOfFirstPage,
    indexOfLastPage
  );


    return (
      <div>

     <Sidebar />
     <>
     <div >
     <TopBar />

      {ModifiedRepostate.length !== 0 ? (
        <div>
        <div className="main" >
        <div className="cardBox">
      {ModifiedRepostate.map((data, index) => {
        return (
      <div key={index}  >


           <div className="card">
            <h1 className="title">{data.name}</h1>
            <p className="cardName">
              Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </p>
             <button variant="primary"><Link to={`./repocard?name=${data.name}`}>
                  View Repositries
             </Link></button>
          </div>
             </div>


              );
        })}



       </div> <Pagination
            currentPage={currentPage}
            apiResult={apiResult} // to total amount of 100 result
            setcurrentPage={setcurrentPage} // Current Page
            postPerPage={postPerPage} // Post per page
          />
          <br />
          <br />
       </div>
      </div>
          ):(
<div></div>
          )}
          </div>
      </>
      </div>
    );
  };

export default GithubCards;
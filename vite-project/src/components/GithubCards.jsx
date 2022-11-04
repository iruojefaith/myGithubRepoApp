import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination  from "../utillitis/Pagination";




const GithubCards = ({ apiResult }) => {
  const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const ModifiedRepostate = apiResult?.slice(
    indexOfFirstPage,
    indexOfLastPage
  );


    return (
     <>
      {ModifiedRepostate.length !== 0 ? (
        <div>
     <div className="git_repo_container">
        {ModifiedRepostate.map((data, index) => {
        return (
          <div key={index}>
              <h1>{data.name}</h1>
              <Link to={`/RepoCard/${data.id}`}>
                  View Reposities
             </Link>
          </div>
        );
        })}
     </div>
     <div>


        <Pagination
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
      </>
    );
  };

export default GithubCards;
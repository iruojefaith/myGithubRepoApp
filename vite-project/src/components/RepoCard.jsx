import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../utillitis/ErrorBoundary";

const GithubCards = ({ apiResult }) => {
  let { id } = useParams();

  const NewFilteredArray = apiResult.find((val) => val.id === id);

  return (
    <ErrorBoundary>
   <>
   {NewFilteredArray ? (
    <>
    <br/>
          <div className="user-title-text">
            <Link to={-1}>Back</Link>
            <br />
            <h2> {NewFilteredArray.apiResult.name}</h2>
            <br />
          </div>
    </>
      )  : (
      <div></div>
      ) }

      </>
      </ErrorBoundary>
);
};

export default GithubCards;
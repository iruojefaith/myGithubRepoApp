import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Pagination  from "../utillitis/Pagination";

import RepoCard from "./RepoCard";
//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




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

     {/* <div className="git_repo_container">
        {ModifiedRepostate.map((data, index) => {
        return (
          <div key={index}>
              <h1>{data.name}</h1>
              <Link to={`./RepoCard/${data.name}`}>
                  View Reposities
             </Link>
          </div>

        );
        })}
     </div> */}
     <div>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
      {ModifiedRepostate.map((data, index) => {
        return (
      <div key={index}>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to={`./repocard?name=${data.name}`}>
                  View Reposities
             </Link></Button>

             </div>
              );
        })}
      </Card.Body>
    </Card>

    </Col>
      ))}
    </Row>
    </div>
     <div>

      {/* <Routes>
        <Route path="/repocard" element={<RepoCard />} />
      </Routes> */}

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
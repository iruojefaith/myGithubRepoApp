import React, { useState, useEffect } from 'react';
import ErrorBoundary from "../utillitis/ErrorBoundary";

const RepoCard = () => {
  const [getRepo, setGetRepo] = useState([])
  const [getCommits, setGetCommits] = useState([])
  const [getLanguages, setGetLanguages] = useState( {})

  const location = window.location.search
  let params = new URLSearchParams(location)

  const repoName = params.get('name')

   const FetchAPIFromServer = async () => {
      const response = await fetch(`https://api.github.com/repos/iruojefaith/${repoName}`);
      const result = await response.json();
        setGetRepo(result);
        // console.log(result)
      };

      useEffect(() => {
        FetchAPIFromServer();
      }, []);

      useEffect(() => {
        const FetchAPIFromServer = async () => {
      const response = await fetch(`https://api.github.com/repos/iruojefaith/${repoName}/commits`);
      const result = await response.json();
        setGetCommits(result);
      };

      FetchAPIFromServer()
      }, []);

      useEffect(() => {
        const FetchAPIFromServer = async () => {
      const response = await fetch(`https://api.github.com/repos/iruojefaith/${repoName}/languages`);
      const result = await response.json();
        setGetLanguages(result);
        console.log(result)
      };

      FetchAPIFromServer()
      }, []);

  console.log(repoName)
  return (
    <ErrorBoundary>
   <>

   <h1>{repoName}</h1>
   <p>Description: {getRepo.description}</p>
   <p>No of Forks: {getRepo.forks} </p>
   <p>Repo URL: <a href={getRepo.html_url} >Repository Link</a> </p>
   <p>Commits:{getCommits.length} </p>
   <p>Languages</p>
   {
        Object.keys(getLanguages).map((repo) => (
            <p>- {repo}</p>
        ))
        }


      </>
      </ErrorBoundary>

);
};




export default RepoCard;

{/*
Languages
Commits
Tags
Files/folders */}

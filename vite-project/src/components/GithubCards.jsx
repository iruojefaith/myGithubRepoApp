import React from "react";
import baseURL from "../api/Github"
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";

const api_key = process.env.REACT_APP_API_KEY;

function GithubCards() {
    const [state, setState] = useState({
    Title : [],
    repo: [],
    language: [],
  });

  const data = fetch("https://github-lang-deploy.herokuapp.com/").then((res) => {
    console.log(res)
  }).catch()

  console.log(data);

  //   let repo = [
  //     baseURL(`Quiz-App `),
  //     baseURL(`Auto-typing-Text-in-js`),
  //     baseURL(`Twitter-clone-Tutorial`),
  //     baseURL(`Firebase-Authetication `),
  //     baseURL(`Todolist-App`),
  //     baseURL(`Clippath-css`),
  //     baseURL(`Darkmode-mode`),
  //     baseURL(`React-Events-Examples `),
  //   ];

  //   const FetchRepo = () => {
  //       fetch("https://github-lang-deploy.herokuapp.com/").then(
  //     (res) => await setState({ language: res.data }),
  //     console.log(res)
  //   );
  //   repo.map( (url) => (url, {
  //         headers: {
  //           Authorization: `token ${api_key}`,
  //         },
  //       }).then((res) => { setState({
  //           repo: [...repo, res.data],
  //         });
  //       })
  //   );
  // })
  // {
  //   const { repo, language } = state;
  //   repo.sort((a, b) =>
  //     a.stargazers_count > b.stargazers_count
  //       ? -1
  //       : b.stargazers_count > a.stargazers_count
  //       ? 1
  //       : 0

    return (
      <Grid container spacing={1}>
        {repo.map((data, i) => (
          <RepoCard repo={data} key={i} language={language} />
        ))}
      </Grid>
    );
  }
export default GithubCards;
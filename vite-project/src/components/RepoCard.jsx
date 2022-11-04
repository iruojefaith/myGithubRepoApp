import React from 'react'


const GithubCards = ({ apiResult }) => {
  let { id } = useParams();

  const NewFilteredArray = apiResult.find((val) => val.id === id);

  return (
   <>
   {NewFilteredArray ? (
          <div className="user-title-text">
            <Link to={-1}>Back</Link>
            <br />
            <h2> {NewFilteredArray.name}</h2>
            <br />
          </div>

      )  : (
      <div></div>
      ) }

      </>
);
};

export default GithubCards;
import React from "react";

const Detail = (props) => {
  let data = "Select a category";
  if (props.joke !== "none") {
    data =
      props.joke.type === "single"
        ? props.joke.joke
        : `${props.joke.setup} ... ${props.joke.delivery}`;
  }
  return (
    <div className="joke-detail">
      {props.joke !== "none" && <p>Category : {props.categ} </p>}
      <h3>{data}</h3>
    </div>
  );
};

export default Detail;

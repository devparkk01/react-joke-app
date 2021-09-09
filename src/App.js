import "./styles.css";
import Detail from "./Detail";
import Axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [joke, setJoke] = useState("none");

  useEffect(() => {
    console.log("changed");
  });

  function getJoke(categSelected) {
    const url = `https://v2.jokeapi.dev/joke/${categSelected}`;
    Axios.get(url)
      .then((response) => setJoke(response.data))
      .catch((err) => setJoke("Nothing found "));
  }

  let categSelected = "none";

  const allCateg = [
    "Misc",
    "Dark",
    "Programming",
    "Pun",
    "Spooky",
    "Christmas"
  ];

  const changeCategHandler = (event) => {
    categSelected = event.target.innerText;
    // console.log(categSelected) ;
  };

  const jokeHandler = (event) => {
    getJoke(categSelected);
  };

  return (
    <div className="joke">
      {allCateg.map((categ) => (
        <button key={categ} className="btn__categ" onClick={changeCategHandler}>
          {categ}
        </button>
      ))}

      <br />
      <button className="btn" onClick={jokeHandler}>
        Submit
      </button>

      <Detail joke={joke}></Detail>
    </div>
  );
};

export default App;

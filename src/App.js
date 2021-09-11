import "./styles.css";
import Detail from "./Detail";
import Axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [categ, setCateg] = useState("Misc");
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

  const allCateg = [
    "Misc",
    "Dark",
    "Programming",
    "Pun",
    "Spooky",
    "Christmas"
  ];

  const changeCategHandler = (event) => {
    setCateg(event.target.innerText);
  };

  const jokeHandler = (event) => {
    getJoke(categ);
  };

  return (
    <div className="joke">
      <div>
        {allCateg.map((categ) => (
          <button
            key={categ}
            className="btn__categ"
            onClick={changeCategHandler}
          >
            {categ}
          </button>
        ))}
      </div>

      <br />
      <button className="btn" onClick={jokeHandler}>
        Submit
      </button>

      <Detail joke={joke} categ={categ}></Detail>
    </div>
  );
};

export default App;

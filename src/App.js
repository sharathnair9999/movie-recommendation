import "./styles.css";
import { useState } from "react";
export default function App() {
  const [theGenre, setGenre] = useState("");
  const genres = {
    Action: [
      { name: "Bang Bang", lead: "Hrithik Roshan", rating: "4/5" },
      { name: "WAR", lead: "Hrithik Roshan", rating: "5/5" },
      { name: "Singham", lead: "Ajay Devgn", rating: "4/5" }
    ],
    love: [
      { name: "Kal Ho Na Ho", lead: "Shah Rukh Khan", rating: "5/5" },
      { name: "Kuch Kuch Hota Hai", lead: "Shah Rukh Khan", rating: "5/5" },
      { name: "Radhe Shyam", lead: "Prabhas", rating: "4/5" }
    ],
    Comedy: [
      { name: "Phir Hera Pheri", lead: "Akshay Kumar", rating: "6/5" },
      { name: "Chup Chup Ke", lead: "Shahid Kapoor", rating: "5/5" },
      { name: "Golmaal", lead: "Ajay Devgn", rating: "5/5" }
    ]
  };

  function genreClickHandler(item) {
    setGenre(item);
  }
  return (
    <div className="App">
      <nav className="heading">Movie buff? Gotchaa!</nav>
      <h3>
        I'd like to suggest few movies based on their genres which I personally
        watched a million times
      </h3>
      {/* <input onChange={emojiInputHandler} /> */}
      {Object.keys(genres).map((item) => (
        <button onClick={() => genreClickHandler(item)} className="genre">
          {item}
        </button>
      ))}
      <ul>
        {theGenre === "" ? (
          <p style={{ fontWeight: "bold" }}>👆 Select One</p>
        ) : (
          genres[theGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "0.5rem",
                fontSize: "larger",
                margin: "1rem 0.5rem",
                backgroundColor: "#EDE9FE",
                width: "60%",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ display: "inline", paddingRight: "0.5rem" }}>
                Name:
              </div>
              <div
                style={{
                  display: "inline",
                  fontWeight: "bold",
                  fontSize: "1.5rem"
                }}
              >
                <em>{movie.name}</em>
              </div>
              <br />
              <div
                style={{
                  display: "inline",
                  fontSize: "1rem",
                  paddingRight: "0.5rem"
                }}
              >
                Lead:
              </div>
              <div style={{ display: "inline", fontSize: "1rem" }}>
                {movie.lead}
              </div>
              <br />
              <div
                style={{
                  display: "inline",
                  fontSize: "1rem",
                  paddingRight: "0.5rem"
                }}
              >
                Rating:
              </div>
              <div style={{ display: "inline", fontSize: "1rem" }}>
                {movie.rating}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

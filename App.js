import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Card from "./Comonents/Card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favouraite from "./Comonents/Favouraite";

function App() {
  const [val, setval] = useState('');
  const [movies, setMovies] = useState([]);
  const [fav,changeFav] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=ef3a9515&s=${val}`
    );
    const jsonData = await data.json();
    setMovies(jsonData.Search);
  };
  function addMovies(movies) {
    let newData = [...fav,movies];
    changeFav(newData);
  }
  return (
    <>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" >
            Movie Hub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active text-primary"
                aria-current="page" to="/">
                Home
              </Link>
              <Link  className="nav-link text-primary" to="/Favouraite">
                Favourite
              </Link>
            </div>
          </div>
        </div>
      </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container text-center">
                <input
                  placeholder="enter movie"
                  onChange={(e) => {
                    setval(e.target.value);
                  }}
                  value={val}
                />
                <button
                  onClick={() => fetchData()}
                  className="btn btn-outline-primary my-2">
                  Click
                </button>
                <div className="row">
                  {movies &&
                    movies.map((a) => {
                      return (
                        <>
                          <Card
                            poster={a.Poster}
                            title={a.Title}
                            addToFavrouites={addMovies}
                          />
                        </>
                      );
                    })}
                </div>
              </div>
            }
          />
          <Route path="/Favouraite" element={<Favouraite favour={fav} changeFavour={changeFav} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

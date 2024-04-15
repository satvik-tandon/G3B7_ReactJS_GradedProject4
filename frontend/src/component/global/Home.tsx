import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home text-white">
      <main>
        <section className="my-1">
          <p
            className="ms-3 font text-center text-white"
            style={{ fontWeight: "bolder", fontSize: "32px" }}
          >
            <br />
            Welcome to the{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Popcorn<span style={{ color: "#DC143C" }}>Hub</span>
            </a>{" "}
            App.
          </p>
          <hr />
          <p>Here you can</p>
          <ul style={{ fontWeight: "bold" }}>
            <li>
              Search Movies that are already in{" "}
              <a
                className="me-2 text-white"
                href="/movies-in-theaters"
                style={{ textDecoration: "none", color: "#7d4860" }}
              >
                Movies in Theaters,
              </a>
              <a
                className="me-2 text-white"
                href="/top-rated-india"
                style={{ textDecoration: "none", color: "#7d4860" }}
              >
                Top Rated Indian Movies,
              </a>
              <a
                className="me-2 text-white"
                href="/top-rated-movies"
                style={{ textDecoration: "none", color: "#7d4860" }}
              >
                Top Rated World Wide Movies.
              </a>
            </li>
            <br />
            <li>
              Search movies that will be coming soon to your nearby Theaters.
            </li>
            <br />
            <li>Add your favorite movies in the favorite Movies List.</li>
          </ul>{" "}
          <br />
        </section>
      </main>
    </div>
  );
};

export default Home;

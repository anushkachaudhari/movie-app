import React from "react";
import AddFavorite from "./AddFavorites";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" className="movie-posters"></img>
          <div
            onClick={() => props.handleFavoritesClick(movie)}
            className="movie-overlay overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;

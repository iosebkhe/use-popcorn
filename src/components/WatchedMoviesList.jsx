import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

WatchedMoviesList.propTypes = {
  watched: PropTypes.array,
};

export default WatchedMoviesList;
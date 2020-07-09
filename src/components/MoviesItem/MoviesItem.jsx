import React, { useState } from 'react';
import cls from './MoviesItem.module.css';

const MoviesItem = (props) => {
	const { movie, addMovieToWillWatch, removeMovieFromWillWatch } = props;
  const [willWatch, setWillWatch] = useState(false);

	const changeWillWatch = () => {
		willWatch ?
			removeMovieFromWillWatch(movie) :
			addMovieToWillWatch(movie);

    setWillWatch(!willWatch);
  }

  return (
		<div className={cls.card}>
			<img
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				alt={movie.title}
			/>
			<div className={cls.cardBody}>
				<h5 className={cls.cardTitle}>{movie.title}</h5>
				<h5>{`(${movie.release_date.split('-')[0]})`}</h5>
				<div className={cls.cardBodyDesc}>
					<p>Rating: {movie.vote_average}</p>
					<button
						type='button'
						className={`btn ${willWatch ? cls.btnActive : cls.btnPrimary}`}
						onClick={changeWillWatch}
					>
						Will watch
					</button>
				</div>
			</div>
		</div>
	);
}

export default MoviesItem;

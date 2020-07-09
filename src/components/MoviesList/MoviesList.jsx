import React from 'react';
import cls from './Movieslist.module.css';
import MoviesItem from '../MoviesItem/MoviesItem'

const MoviesList = (props) => {

	const { movies, addMovieToWillWatch, removeMovieFromWillWatch } = props;

  return (
		<div className={cls.boxList}>
			{movies.map(movie => {
				return (
					<div key={movie.id} className={cls.card}>
						<MoviesItem
							movie={movie}
							addMovieToWillWatch={addMovieToWillWatch}
							removeMovieFromWillWatch={removeMovieFromWillWatch}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default MoviesList;
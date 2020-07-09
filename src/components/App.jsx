/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import cls from './App.module.css';
import MoviesList from './MoviesList/MoviesList';
import Filters from './Filters/Filters';
import MoviesWillWatch from './MoviesWillWatch/MoviesWillWatch';
import { API_URL, API_KEY_3 } from '../api';
import Pagination from './Pagination/Pagination'

const useMoviesWillWatch = () => {
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);
  const addMovieToWillWatch = (movie) => {
		setMoviesWillWatch([...moviesWillWatch, movie]);
	};

	const removeMovieFromWillWatch = (movie) => {
		let updateMovies = moviesWillWatch.filter((item) => item.id !== movie.id);
		setMoviesWillWatch(updateMovies);
  };

  return {
		moviesWillWatch,
		addMovieToWillWatch,
		removeMovieFromWillWatch,
	};
}

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

	const getMovies = ({ sortBy, currentPage }) => {
		fetch(
			`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&language=en-US&page=${currentPage}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setTotalPages(data.total_pages);
				setMovies(data.results);
			});
	};

	return {
    movies,
    totalPages,
		getMovies,
	};
};

const App = () => {
  const {
		moviesWillWatch,
		addMovieToWillWatch,
		removeMovieFromWillWatch,
  } = useMoviesWillWatch();

  const [sortBy, setSortBy] = useState('popularity.desc');
  const [currentPage, setCurrentPage] = useState(1);
  const setSteps = 1;

  const {
    movies,
    totalPages,
    getMovies,
  } = useMovies();

  const updateCurrentPage = (value) => {
		setCurrentPage(value);
	};

  const updateSortBy = value => {
    setSortBy(value);
  }

  useEffect(() => {
		getMovies({ sortBy, currentPage });
		return () => {};
	}, [sortBy, currentPage]);



  return (
		<div className={`contaner ${cls.app}`}>
			<div className='boxMovies'>
				<Filters updateSortBy={updateSortBy} sortBy={sortBy} />
				<MoviesList
					movies={movies}
					addMovieToWillWatch={addMovieToWillWatch}
					removeMovieFromWillWatch={removeMovieFromWillWatch}
				/>
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					updateCurrentPage={updateCurrentPage}
					setSteps={setSteps}
				/>
			</div>
			<div className='boxWillMovies'>
				<MoviesWillWatch moviesWillWatch={moviesWillWatch} />
			</div>
		</div>
	);
}

export default App;

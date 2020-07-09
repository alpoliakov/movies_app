import React from 'react';
import cls from './Filters.module.css';


const Filters = (props) => {
	const { sortBy, updateSortBy } = props;
	const setClassName = value => `${sortBy === value ? cls.btnActive : ''}`;
	const updateFilter = value => {
		return () => {
			updateSortBy(value);
		}
	};

  return (
		<div className={cls.boxButton}>
			<button
				type='button'
				className={`${cls.btn} ${cls.btnPrimary} ${setClassName(
					'popularity.desc',
				)}`}
				onClick={updateFilter('popularity.desc')}
			>
				Popularity desc
			</button>
			<button
				type='button'
				className={`${cls.btn} ${cls.btnPrimary} ${setClassName(
					'revenue.desc',
				)}`}
				onClick={updateFilter('revenue.desc')}
			>
				Revenue desc
			</button>
			<button
				type='button'
				className={`${cls.btn} ${cls.btnPrimary} ${setClassName(
					'vote_average.desc',
				)}`}
				onClick={updateFilter('vote_average.desc')}
			>
				Vote average desc
			</button>
		</div>
	);
}

export default Filters;
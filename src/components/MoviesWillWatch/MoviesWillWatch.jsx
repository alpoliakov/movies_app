import React from 'react';
import cls from './MoviesWillWatch.module.css';

const MoviesWillWatch = (props) => {
  const { moviesWillWatch } = props;
  return (
		<div className={cls.itemWillWatch}>
			<h3>Will Watch: {moviesWillWatch.length} movies</h3>
			<ul className={cls.listGroup}>
				{moviesWillWatch.map((item) => (
					<li className={cls.listGroupItem} key={item.id}>
						<div className={cls.boxItem}>
							<div>{item.title}</div>
							<div className={cls.rating}>{` * ${item.vote_average}`}</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MoviesWillWatch;

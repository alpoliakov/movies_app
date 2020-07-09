import React from 'react';
import cls from './Pagination.module.css';

const Pagination = (props) => {
  const { currentPage, totalPages, updateCurrentPage, setSteps } = props;
  const nextPage = () => {
    if (currentPage >= 500) {
      return updateCurrentPage(500);
    }
    updateCurrentPage(currentPage + setSteps);
  }

  const previousPage = () => {
    if (currentPage <= 1) {
      return updateCurrentPage(1);
    }
    updateCurrentPage(currentPage - setSteps);
  }

  return (
		<div className={cls.pagination}>
			<div className={cls.arrow} onClick={previousPage}>
				<i className='fas fa-arrow-left'></i>
			</div>
			<div className={cls.pages}>
				<h5>Current page: {currentPage}</h5>
				<h5>Total pages: {totalPages}</h5>
			</div>
			<div className={cls.arrow} onClick={nextPage}>
				<i className='fas fa-arrow-right'></i>
			</div>
		</div>
	);
}

export default Pagination;
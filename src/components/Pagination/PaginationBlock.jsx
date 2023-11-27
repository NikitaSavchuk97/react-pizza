import styles from './PaginationBlock.module.scss';
import ReactPaginate from 'react-paginate';

function PaginationBlock({ value, onChangePage }) {
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
  //   setItemOffset(newOffset);
  // };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={value-1}
      renderOnZeroPageCount={null}
    />
  );
}

export default PaginationBlock;

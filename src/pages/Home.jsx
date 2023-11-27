import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import qs from 'qs';

import Categories from '../components/CategoriesBlock/CategoriesBlock';
import Sort, { sortList } from '../components/SortBlock/SortBlock';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import PaginationBlock from '../components/Pagination/PaginationBlock';

import { setCurrentPage, setFiltres } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';
import { fetchPizza } from '../redux/slices/pizzaSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { sortId, categoryId, currentPage } = useSelector((state) => state.filterSlice);
  const { items, status } = useSelector((state) => state.pizzaSlice);

  const { searchValue } = useContext(SearchContext);

  const filteredPizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeletons = [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />);

  const handleChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const sortBy = sortId.type.replace('-', '');
    const order = sortId.type.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `categoty=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizza({
        sortBy,
        order,
        category,
        search,
        currentPage,
      }),
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    //если были изменены параметры и был первый рендер
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortId.type,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;

    console.log(items);
  }, [categoryId, sortId, currentPage]);

  useEffect(() => {
    //если был первый рендер, то проверяем URL-параметры и сохраняем в Redux
    if (window.location.search) {
      const params = qs.parse(window.location.search.replace('?', ''));
      const sort = sortList.find((obj) => obj.type === params.sortProperty);
      dispatch(setFiltres({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    //если был первый рендер, то запрашиваем пиццы

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortId, searchValue, currentPage]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      {status === 'error' ? (
        <div>ОШИБКА</div>
      ) : (
        <>
          <div className='content__items'>{status === 'loading' ? skeletons : filteredPizzas}</div>
          <PaginationBlock value={currentPage} onChangePage={handleChangePage} />
        </>
      )}
    </div>
  );
}

export default Home;

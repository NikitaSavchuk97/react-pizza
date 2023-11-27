import { useSelector, useDispatch } from 'react-redux';
import { setCategodyId } from '../../redux/slices/filterSlice';

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

function Categories() {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const dispatch = useDispatch();

  const handleClickItem = (e) => {
    dispatch(setCategodyId(e.target.value));
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              value={index}
              className={`${categoryId === index ? 'active' : ''}`}
              onClick={handleClickItem}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;

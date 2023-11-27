import './scss/app.scss';

import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import Header from './components/HeaderBlock/HeaderBlock';
import NotFound from './components/NotFoundBlock/NotFoundBlock';
import Home from './pages/Home';
import Cart from './pages/Cart';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  

  return (
		<div className='wrapper'>
			<div>

			</div>

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home search={searchValue} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

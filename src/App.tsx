import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import ListPage from './pages/list';
import SearchPage from './pages/search';
import DetailSearchPage from './pages/search/detail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/list' element={<ListPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/search/detail' element={<DetailSearchPage />} />
      </Routes>
    </>
  );
}

export default App;

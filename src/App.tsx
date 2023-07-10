import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Pages
import ListPage from './pages/list';
import SearchPage from './pages/list/search';
import DetailPage from './pages/list/detail';
import MyListPage from './pages/list/mylist';


function App() {

  axios.defaults.baseURL = "https://1ce7-119-203-74-86.ngrok-free.app";
  axios.defaults.headers['ngrok-skip-browser-warning'] = '69420';

  useEffect(()=>{
    
    if(window.webview.token())
      localStorage.setItem("qpid-atk", window.webview.token())

    if(localStorage.getItem("qpid-atk"))
      axios.defaults.headers.common["Authorization"] = `${localStorage.getItem("qpid-atk")}`
  },[])

  return (
    <>
      <Routes>
        <Route path='/list' element={<ListPage />} />
        <Route path='/list/detail/:id' element={<DetailPage />} />
        <Route path='/list/mylist' element={<MyListPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
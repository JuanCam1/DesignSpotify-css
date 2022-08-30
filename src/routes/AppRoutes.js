import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../shared/Navbar'
import {Home} from '../components/home/Home';
import {Library} from '../components/library/Library';
import {Like} from '../components/like/Like';
// import NewPlayList from '../components/new/NewPlayList';

const AppRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="library" element={<Library />} />
          <Route path="like" element={<Like />} /> */}
          {/* <Route path='/new' element={<NewPlayList />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

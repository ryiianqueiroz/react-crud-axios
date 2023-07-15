import './App.css';
import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Feed from './pages/feed'
import Edit from './pages/edit'
import Post from './pages/post'
import Lermais from './pages/lermais'
import Delete from './pages/delete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/post" element={<Post />} />
        <Route path="/lermais" element={<Lermais />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

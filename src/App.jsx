import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostTest from './pages/PostTest';
import Answer from './pages/Answer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post-test" element={<PostTest />} />
      <Route path="/answer" element={<Answer />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import './App.css';
import SearchPhotos from './components/searchPhoto';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<SearchPhotos/>}/>
                    <Route path="/search/searchResults" element={<searchResults/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
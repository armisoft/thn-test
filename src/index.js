import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Search from './components/search';
import MainAside from './pages/main-aside';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
		<Search />
		<MainAside />
		<Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
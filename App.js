import React from 'react';  
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from './components/Header';
import Ad from './components/Ad';
import Shorten from './components/Shorten';
import Appinfo from './components/Appinfo';
import Boost from './components/Boost';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Ad/>
    <Shorten/>
    <Appinfo/>
    <Boost/>
    <Footer/>
    </div>
  );
}

export default App;

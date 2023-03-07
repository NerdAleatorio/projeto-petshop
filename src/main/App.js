import './App.css';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Header from '../components/template/Header';
import Main from '../components/template/Main';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import personIcon from '../assets/imgs/person-circle.svg';

export default props =>
  <BrowserRouter>
    <div className='app grid-template-rows-4'>
      <Logo />
      <Header />
      <Main />
      <Nav icon={personIcon}/>
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>

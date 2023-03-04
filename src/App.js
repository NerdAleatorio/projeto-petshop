import './App.css';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default props =>
  <BrowserRouter>
    <div className='app grid-template-rows-4'>
      <Logo />
      <Header title='Meu amigo pet'/>
      <Main />
      <Nav />
      <Footer />
    </div>
  </BrowserRouter>

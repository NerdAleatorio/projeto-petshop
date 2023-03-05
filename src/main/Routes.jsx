import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../components/home/Home";
import Cart from '../components/pages/Cart'

export default props => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<Home />}/>
    </Routes>

);
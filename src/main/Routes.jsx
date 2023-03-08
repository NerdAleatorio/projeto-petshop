import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../components/home/Home";
import Cart from '../components/pages/Cart';
import Compra from "../components/pages/Compra";
import Register from "../components/pages/Register";
import Animais from '../components/pages/Animais';

export default props => (
    <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/register" element={<Register />}/>

        <Route path="/animais" element={<Animais />}/>

        <Route path="/cart" element={<Cart />}/>
        <Route path="/compra" element={<Compra />}/>

        <Route path="*" element={<Home />}/>
    </Routes>

);
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../components/home/Home";
import Cart from '../components/pages/Cart';
import Compra from "../components/pages/Compra";
import Register from "../components/pages/Register";
import Animais from '../components/pages/Animais';

import Caes from '../components/pages/animais/Caes';
import Gatos from '../components/pages/animais/Gatos';
import Aves from '../components/pages/animais/Aves';
import Repteis from '../components/pages/animais/Repteis';
import Roedores from '../components/pages/animais/Roedores';


export default props => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>

        <Route path="/animais" element={<Animais />}/>
        <Route path="/caes" element={<Caes/>}/>
        <Route path="/gatos" element={<Gatos/>}/>
        <Route path="/aves" element={<Aves/>}/>
        <Route path="/repteis" element={<Repteis/>}/>
        <Route path="/roedores" element={<Roedores/>}/>

        <Route path="/cart" element={<Cart />}/>
        <Route path="/compra" element={<Compra />}/>

        <Route path="*" element={<Home />}/>
    </Routes>

);
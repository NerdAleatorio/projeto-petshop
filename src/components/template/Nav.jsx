import React from "react";
import './Nav.css'

export default props =>
    <aside className='abovenav'>
        <nav className='nav'>
            <a href="/"><i className="nav-option"></i>Início</a>
            <a href="/animais"><i className="nav-option"></i>Animais</a>
            <a href="/produtos"><i className="nav-option"></i>Produtos</a>
            <a href="/marcas"><i className="nav-option"></i>Marcas</a>
            <a href="/servicos"><i className="nav-option"></i>Serviços</a>
            <a href="/sobre"><i className="nav-option"></i>Sobre</a>
            <a href="/register" className="nav-option"><img src={props.icon}></img></a>
        </nav>
    </aside>
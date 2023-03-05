import React from "react";
import './Nav.css'

export default props =>
    <aside className='sidenav'>
        <nav className='sidenav-nav'>
            <a href="/"><i className="nav-option"></i>Início</a>
            <a href="/cart"><i className="nav-option"></i>Cart</a>
            <a href="/caes"><i className="nav-option"></i>Cães</a>
            <a href="/gato"><i className="fa fa-home"></i>Gatos</a>
            <a href="/outros"><i className="fa fa-home"></i>Outros pets</a>
            <a href="/marcas"><i className="fa fa-home"></i>Marcas</a>
            <a href="/servicos"><i className="fa fa-home"></i>Serviços</a>
            <a href="/sobre"><i className="fa fa-home"></i>Sobre a Meu amigo cão</a>
        </nav>
    </aside>
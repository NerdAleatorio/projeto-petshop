import React from "react";
import './HomeAnimais.css'

import Main from "../../template/Main";

export default props =>
    <Main>
        <div className="animal-content">
            <div className="div-welcome">
                <img alt="img-animal" className="imagem-welcome" src={props.url}></img>
            </div>
            <div className="produtos-promocao">
                <h1 className="header1">Produtos em promoção</h1>
            </div>
            <div className="produtos-animal">
                <h1 className="header2">Todos os produtos</h1>
            </div>
            <div className="marcas-animal">
                <h1 className="header3">Filtre por marcas</h1>
            </div>
        </div>
    </Main>
import React from "react";
import './Card.css'

import MainProduto from "./MainProduto";


export default props =>
    <MainProduto>
        <div className="produto-content">
            <img className="img-produto" src={props.url}></img>
            <h1 className="nome">{props.nome}</h1>
            <p className="marca">{props.marca}</p>
            <p className="animal">{props.animal}</p>
            <p className="porte">{props.porte}</p>
            <p className="tamanho">{props.tamanho}</p>
            <p className="preco">{props.preco}</p>
            <p className="quantidade">{props.quantidade}</p>
            <img className="excluir" src='https://icongr.am/clarity/trash.svg?size=128&color=currentColor'></img>
        </div>
    </MainProduto>  
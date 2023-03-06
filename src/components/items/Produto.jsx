import React, { Component } from "react";
import './Produto.css';

import MainProduto from "./MainProduto";


export default props =>
        <MainProduto>
            <div className="produto-content">
                <div className="conteudo">
                    <img className="img-produto" src={props.url}></img>
                    <p className="descricao">
                        <span id="nome">{props.nome}</span>
                        <br></br>Produtor: <span id="destaque">{props.marca}</span> | Indicação: <span id="destaque">{props.animal}</span>
                        <br></br>Porte: <span id="destaque">{props.porte}</span> | Tamanho: <span id="destaque">{props.tamanho}</span>
                    </p>
                    <p className="preco">{props.preco}</p>
                    {/* <p className="marca">{props.marca}</p>
                    <p className="animal">{props.animal}</p>
                    <p className="porte">{props.porte}</p>
                    <p className="tamanho">{props.tamanho}</p>
                    <p className="preco">{props.preco}</p> */}
                    {/* <p className="quantidade">{props.quantidade}</p>
                    <img className="excluir" src='https://icongr.am/clarity/trash.svg?size=128&color=currentColor'></img> */}
                </div>
            </div>
        </MainProduto>

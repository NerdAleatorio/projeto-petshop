import React from "react";
import './Animais.css'

import cao from '../../assets/imgs/cao.png';
import gato from '../../assets/imgs/gato.png';
import ave from '../../assets/imgs/ave.png';
import tartaruga from '../../assets/imgs/tartaruga.png';
import hamster from '../../assets/imgs/hamster.png';

import Main from "../template/Main";

export default props =>
    <Main title='ANIMAIS'>
        <div className="animais-content">
            <div className="caes-div">
                <img alt="imagem-animal" className="imagem-animal" src={cao}></img>
                <p className="nome-animal">Cão</p>
            </div>
            <div className="gatos-div">
                <img alt="imagem-animal" className="imagem-animal" src={gato}></img>
                <p className="nome-animal">Gato</p>
            </div>
            <div className="aves-div">
                <img alt="imagem-animal" className="imagem-animal" src={ave}></img>
                <p className="nome-animal">Ave</p>
            </div>
            <div className="tartaruga-div">
                <img alt="imagem-animal" className="imagem-animal" src={tartaruga}></img>
                <p className="nome-animal">Tartaruga</p>
            </div>
            <div className="roedores-div">
                <img alt="imagem-animal" className="imagem-animal" src={hamster}></img>
                <p className="nome-animal">Roedor</p>
            </div>
        </div>
    </Main>
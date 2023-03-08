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
                <a href="/caes"><img alt="imagem-animal" className="imagem-animal" src={cao}></img></a>
                <p className="nome-animal">Cão</p>
            </div>
            <div className="gatos-div">
                <a href="/gatos"><img alt="imagem-animal" className="imagem-animal" src={gato}></img></a>
                <p className="nome-animal">Gato</p>
            </div>
            <div className="aves-div">
                <a href="/aves"><img alt="imagem-animal" className="imagem-animal" src={ave}></img></a>
                <p className="nome-animal">Ave</p>
            </div>
            <div className="tartaruga-div">
                <a href="/repteis"><img alt="imagem-animal" className="imagem-animal" src={tartaruga}></img></a>
                <p className="nome-animal">Répteis</p>
            </div>
            <div className="roedores-div">
                <a href="/roedores"><img alt="imagem-animal" className="imagem-animal" src={hamster}></img></a>
                <p className="nome-animal">Roedores</p>
            </div>
        </div>
    </Main>
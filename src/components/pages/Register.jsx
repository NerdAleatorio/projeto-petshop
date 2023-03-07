import React from "react";
import './Register.css'

import Main from "../template/Main";

export default props =>
    <Main title='SUA CONTA'>
        <div className="register-content">
            <div className="user-register">
                <form className="register-box" action="/cadastrar" method="post">
                    <input minlength="1" type="text" id="nome" name="nome" placeholder="Seu nome"/>
                    <input type="email" id="email" name="email" placeholder="Insira seu email"></input>
                    <input minlength='8' maxlength="20" type="password" id="password" name="password" placeholder="Insira sua senha"></input>
                    <input type="submit" name="botao" value="Cadastrar"></input>
                </form>
            </div>
            <div className="user-login">
                <form className="login-box" action="/cadastrar" method="post">
                    <input type="email" id="email" name="email" placeholder="Insira seu email"></input>
                    <input minlength='8' maxlength="20" type="password" id="password" name="password" placeholder="Insira sua senha"></input>
                    <input type="submit" name="botao" value="Cadastrar"></input>
                </form>
            </div>
        </div>
    </Main>
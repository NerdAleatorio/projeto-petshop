import React from "react";
import Main from "../template/Main";
import './Home.css';

const headerProps = {
    title: 'Início',
    register: 'https://icongr.am/entypo/user.svg?size=128&color=currentColor'
}

export default props =>
    <Main {...headerProps}>
        <div className="display-4">BEM-VINDO!</div><hr></hr>
        <p className="mb-5">Sistema em construção.</p>
    </Main>
import React from "react";

import AvesLogo from '../../../assets/imgs/caes.png';

import HomeAnimais from "./HomeAnimais";
import Main from "../../template/Main";

export default props =>
    <Main title='Cães'>
        <HomeAnimais url={AvesLogo}/>
    </Main>
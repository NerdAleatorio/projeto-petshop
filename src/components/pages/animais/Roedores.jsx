import React from "react";

import caesLogo from '../../../assets/imgs/caes.png';

import HomeAnimais from "./HomeAnimais";
import Main from "../../template/Main";

export default props =>
    <Main title='Cães'>
        <HomeAnimais url={caesLogo}/>
    </Main>
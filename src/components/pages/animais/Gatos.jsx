import React from 'react';

import gatosLogo from '../../../assets/imgs/felinos.png';

import HomeAnimais from './HomeAnimais';
import Main from '../../template/Main';

export default props =>
    <Main>
        <HomeAnimais url={gatosLogo}/>
    </Main>
import React from 'react';
import './Compra.css'

import Main from '../template/Main';
import Produto from '../items/Produto';

const headerProps = {
    title: '5'
}

export default props =>
    <Main {...headerProps}>
        <div className='div compra-div'>
            <div className='compra-content'>
                <div className='produto-zone'>
                <Produto
                    url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                    nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                    tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                </div>
                
                <div className='opcoes-zone'>
                    <p className='produto-preco'>PREÇO</p>
                    <label>Calcuar Frete</label>
                    <input type={Number} placeholder='CEP'></input>
                    <button>COMPRAR</button>
                </div>
            </div>
        </div>
    </Main>
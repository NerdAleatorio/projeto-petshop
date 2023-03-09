import React from 'react';
import './Compra.css'

import Main from '../template/Main';
import Produto from '../items/Produto';

export default props =>
    <Main title='Compra'>
        <div className='div compra-div'>
                <div className='produto-zone'>
                <Produto
                    url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                    nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                    tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                </div>
                
                <div className='opcoes-zone'>

                    <label for='frete-area' className='frete-text'>Calcular frete</label>
                    <input id='frete-area' type={Number} placeholder='Digite seu CEP'></input>

                    <h1 className='title-resumo'>Resumo do pedido</h1>
                    <div className='resumo-pedido'>
                        <p className='qnt-produto'>1 item</p>
                        <p className='valor-produto'>R$15.99</p>

                        <p className='frete-pedido'>Frete</p>
                        <p className='valor-frete'>A calcular</p>

                        <p className='total-pedido'>Total</p>
                        <p className='valor-total'>R$15.99</p>
                    </div>
                    <input type={Number} placeholder='Cupom de desconto'></input>
                    <button>APLICAR</button>
                    <button>COMPRAR</button>
                </div>
        </div>
    </Main>
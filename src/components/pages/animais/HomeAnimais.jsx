import React from "react";
import './HomeAnimais.css'

import Main from "../../template/Main";
import Produto from '../../items/Produto';
import Marcas from '../../items/Marcas';

export default props =>
    <Main>
        <div className="animal-content">
            <div className="div-welcome">
                <img alt="img-animal" className="imagem-welcome" src={props.url}></img>
            </div>
            
            <div className="header1"><p className="titulo-destaque">Produtos em promoção</p></div>
            <div className="produtos-promocao">
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
            </div>
            
            <div className="header2"><p className="titulo-destaque">Todos os produtos</p></div>
            <div className="produtos-animal">
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>
            </div>
            
            <div className="header3"><p className="titulo-destaque">Filtre por marcas</p></div>
            <div className="marcas-animal">
                <Marcas url='https://agenciakiwee.com.br/wp-content/uploads/2019/01/Wiskas.png'/>
                <Marcas url='https://i.pinimg.com/originals/71/59/c6/7159c6ca296e20900bf8c49758620d26.png'/>
                <Marcas url='https://mex.mars.com/sites/g/files/jydpyr496/files/2019-03/Logos_BUSINESS_SEGMENTS_23.png'/>
                <Marcas url='https://agenciakiwee.com.br/wp-content/uploads/2019/01/Wiskas.png'/>
                <Marcas url='https://agenciakiwee.com.br/wp-content/uploads/2019/01/Wiskas.png'/>
            </div>
        </div>
    </Main>
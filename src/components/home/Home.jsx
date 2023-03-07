import React from "react";
import Main from "../template/Main";
import './Home.css';

import cupom from '../../assets/imgs/PETLOVER.png'
import Produto from "../items/Produto";
import Marcas from '../items/Marcas'

const headerProps = {
    title: 'Início'
}


export default props =>
    <Main {...headerProps}>
        <img className="cupom" alt="cupom" src={cupom}></img>
        <p className="titulo-destaque">Produtos em destaque</p>
        <div className="home">
            <div className="destaque">
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1639142661810.jpg'
                nome='Ração Golden' marca='Golden' animal='Cães' porte='Adulto' 
                tamanho='1KG' preco='R$ 44.99' quantidade='1'/>
                
                <Produto 
                url='https://static.petz.com.br/fotos/1658419480153.jpg'
                nome='Ração Finotrato Gold' marca='Finotrato' animal='Cães' porte='Adulto' 
                tamanho='3KG' preco='R$ 54.90' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1674074964254.jpg'
                nome='Ração GranPlus Choice' marca='Finotrato' animal='Gatos' porte='Adulto' 
                tamanho='10KG' preco='R$ 147.99' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1656511663150.jpg'
                nome='Alcon Club Reptolife' marca='Finotrato' animal='Tartaruga' porte='Adulto' 
                tamanho='270G' preco='R$ 96.90' quantidade='1'/>
            </div>

            <div className="title"><p className="titulo-destaque">Marcas bem avaliadas</p></div>
            <div className="marcas">
                <Marcas url='https://agenciakiwee.com.br/wp-content/uploads/2019/01/Wiskas.png'/>
                <Marcas url='https://i.pinimg.com/originals/71/59/c6/7159c6ca296e20900bf8c49758620d26.png'/>
                <Marcas url='https://mex.mars.com/sites/g/files/jydpyr496/files/2019-03/Logos_BUSINESS_SEGMENTS_23.png'/>
                <Marcas url='https://agenciakiwee.com.br/wp-content/uploads/2019/01/Wiskas.png'/>
                <Marcas url='https://agenciakiwee.com.br/wp-content/uploads/2019/01/Wiskas.png'/>
            </div>

            <div className="titleP"><p className="titulo-destaque">Nossos produtos</p></div>
            <div className="produtos">
                <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1639142661810.jpg'
                nome='Ração Golden' marca='Golden' animal='Cães' porte='Adulto' 
                tamanho='1KG' preco='R$ 44.99' quantidade='1'/>
                
                <Produto 
                url='https://static.petz.com.br/fotos/1658419480153.jpg'
                nome='Ração Finotrato Gold' marca='Finotrato' animal='Cães' porte='Adulto' 
                tamanho='3KG' preco='R$ 54.90' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1674074964254.jpg'
                nome='Ração GranPlus Choice' marca='Finotrato' animal='Gatos' porte='Adulto' 
                tamanho='10KG' preco='R$ 147.99' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1656511663150.jpg'
                nome='Alcon Club Reptolife' marca='Finotrato' animal='Tartaruga' porte='Adulto' 
                tamanho='270G' preco='R$ 96.90' quantidade='1'/>
            </div>
            
            <div className="titleS"><p className="titulo-destaque">Nossos serviços</p></div>
            <div className="servicos">
            <Produto
                url='https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/w/h/whiskas_sache_carne_ao_molho_1_.png'
                nome='Whiskas Sachê' marca='Whiskas' animal='Gatos' porte='Adulto' 
                tamanho='500G' preco='R$ 15.99' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1639142661810.jpg'
                nome='Ração Golden' marca='Golden' animal='Cães' porte='Adulto' 
                tamanho='1KG' preco='R$ 44.99' quantidade='1'/>
                
                <Produto 
                url='https://static.petz.com.br/fotos/1658419480153.jpg'
                nome='Ração Finotrato Gold' marca='Finotrato' animal='Cães' porte='Adulto' 
                tamanho='3KG' preco='R$ 54.90' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1674074964254.jpg'
                nome='Ração GranPlus Choice' marca='Finotrato' animal='Gatos' porte='Adulto' 
                tamanho='10KG' preco='R$ 147.99' quantidade='1'/>

                <Produto 
                url='https://static.petz.com.br/fotos/1656511663150.jpg'
                nome='Alcon Club Reptolife' marca='Finotrato' animal='Tartaruga' porte='Adulto' 
                tamanho='270G' preco='R$ 96.90' quantidade='1'/>
            </div>
        </div>
    </Main>
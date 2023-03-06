import React from "react";
import Main from "../template/Main";
import './Home.css';
import cupom from '../../assets/imgs/PETLOVER.png'
import Produto from "../items/Produto";

const headerProps = {
    title: 'Início',
    register: 'https://icongr.am/entypo/user.svg?size=128&color=currentColor'
}

export default props =>
    <Main {...headerProps}>
        <img className="cupom" alt="cupom" src={cupom}></img>
        <p className="titulo-destaque">Produtos em destaque</p>
        <div className="home display-4">
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
            <div className="marcas">
                MARCAS
            </div>
            <div className="produtos">
                PRODUTOS
            </div>
            <div className="servicos">
                SERVIÇOS
            </div>
        </div>
    </Main>
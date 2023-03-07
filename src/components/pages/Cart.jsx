import React, { Component } from "react";
import Main from "../template/Main";
import './Cart.css'
import Produto from "../items/Produto";
import FinalizarPedido from "../items/FinalizarPedido"

const headerProps = {
    icon: 'users',
    title: 'Carrinho de compras'
}

export default class Cart extends Component {
        renderCart(){
            return(
                <div className="carrinho-de-compras">
                        <div className="product-content">
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
                            nome='Alcon Club Reptolife' marca='Reptolife' animal='Tartaruga' porte='Adulto' 
                            tamanho='270G' preco='R$ 96.90' quantidade='1'/>

                        </div>
                   
                        <div className="rightnav">
                            <div className="cep">
                                <h1>ola</h1>
                            </div>
                        </div>

                        
                    </div>
                )
        }

        render(){
            return(
            <Main {...headerProps}>
                {this.renderCart()}
            </Main>
            )
        }
}

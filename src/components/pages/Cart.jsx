import React, { Component } from "react";
import Main from "../template/Main";
import './Cart.css'
import Produto from "../items/Produto";

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
                            nome='Ração Finotrato Gold' marca='Finotrato' animal='Cães' porte='Adulto' 
                            tamanho='1KG' preco='R$ 44.99' quantidade='1'/>
                            
                        </div>
                        <div className="entrega">
                            INFORMAÇÕES DE ENTREGA
                        </div>
                        <div className="rightnav">
                            FINALIZAR PEDIDO
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

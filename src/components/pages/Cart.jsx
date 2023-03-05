import React, { Component } from "react";
import Main from "../template/Main";
import './Cart.css'

const headerProps = {
    icon: 'users',
    title: 'Carrinho de compras'
}

export default class Cart extends Component {
        renderCart(){
            return(
                <div className="carrinho-de-compras">
                        <div className="product-content">
                            PRODUTO
                        </div>
                        <div className="entrega">
                            INFORMAÇÕES DE ENTREGA
                        </div>
                        <div className="descricao">
                            DESCRIÇÃO SOBRE O SITE
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

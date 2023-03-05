import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Carrinho de compras'
}

export default class Cart extends Component {
    renderContent(){
        return(
            <div className="carrinho-de-compras">
                <p>ATENÇÃO!!</p>
            </div>
        )
    }    
    
    render(){
            return (
                <Main {...headerProps}>
                    {this.renderContent}
                </Main>
        )
    }
}

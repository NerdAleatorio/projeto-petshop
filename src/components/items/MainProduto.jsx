import React, { Fragment } from "react";
import './MainProduto.css'

export default props =>
    <Fragment>
        <main className="template-produto container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </Fragment>
import React, { Fragment } from "react";
import './Header.css'

export default props =>
    <Fragment>
            <header className='header'>
                <h1 className='header-text'>{props.title}</h1>
            </header>
    </Fragment>
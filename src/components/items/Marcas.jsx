import React, { Fragment } from 'react';
import './Marcas.css'

export default props =>
  <Fragment>
    <div className='marca-content'>
        <img alt='marca' className='marca-img' src={props.url}></img>
    </div>
  </Fragment>

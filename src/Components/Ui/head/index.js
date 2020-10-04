import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../head/style.css'
// import { Container } from './styles';

function Head() {
  return (
      <section className='head_container'>
          <a href='/'>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>Anterior</a>
          <a href='/'>Utanga</a>
      </section>
  );
}

export default Head;
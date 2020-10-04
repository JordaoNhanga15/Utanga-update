import React, {useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Menu_Head from '../menu_head'
import '../cursos_head/style.css'

// import { Container } from './styles';



function Cursos_Head() {

        useEffect(()=>{
            document.title='Faculdades'
        },[])

  return (
      <nav className='container_nav'>
          <div>
            <Menu_Head />
          </div>
          <section className="banner_cursos">
              <h1 id="banner-boxx">Bem vindo a Faculdade de engenharia</h1>
              <p id="banner-titlee">curso de engenharia informatica, desde o ano 2006 a formar</p>
              <div className="buttons">
                <a href="3">Baixar Programa do curso <i class="fa fa-download" aria-hidden="true"></i></a>
                <a href="/inscricao">Fazer inscricao</a>
              </div>
          </section>
      </nav>
      
  );
}

export default Cursos_Head;
import React from 'react';
import '../Eventos/style.css'
import 'font-awesome/css/font-awesome.min.css';
// import { Container } from './styles';

function Eventos() {
  return (
      <div>
          
          <section id="event">
          <h2>Próximos eventos</h2> 
        <aside className="event_container">
            
            <div className="event">
                 <div className="place">
                 <i class="fa fa-calendar" aria-hidden="true"></i> <time>14 DE FEVEREIRO DE 2020 </time>
                 </div>
                 <h2>Exames de acesso 2020</h2>
                 <p>Exames de Acesso 2020.</p>
                 <span>capolo II</span>

                 <div className="btn">
                 <a href="/Event" className="call">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                   Continuar Lendo <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
            </div>

            <div className="event">
                <div className="place">
                <i class="fa fa-calendar" aria-hidden="true"></i> <time>05 de Outubro de 2020</time>
                </div>
                <h2>Reinicio das aulas</h2>
                <p>Aulas em um periodo pos-pandemico</p>
                <span>capolo II</span>

                <div className="btn">
                <a href="/Event" className="call">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Continuar Lendo <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
           </div>
        </aside>

        {/* <aside className='end'>
            <ul>
                <li><a href='#s'><i class="fa fa-university" aria-hidden="true"></i><div className='end_a'>
                    <h3>universidade</h3>
                    <h5>Ler mais...</h5>
                    </div></a></li>
                <li><a href='#s'><i class="fa fa-graduation-cap" aria-hidden="true"></i><div className='end_a'>
                     <h3>Candidatura</h3>
                     <h5>Ler mais...</h5>
                    </div></a></li>
                <li><a href='#s'><i class="fa fa-newspaper-o" aria-hidden="true"></i><div className='end_a'>
                  <div>  <h3>Noticias</h3></div>
                   <div> <h5>Ler mais...</h5></div>
                    </div></a></li>
                <li><a href='#s'><i class="fa fa-phone" aria-hidden="true"></i><div className='end_a'>
                    <h3>contactos</h3>
                    <h5>Ler mais...</h5>
                    </div></a></li>
            </ul>
          </aside> */}
    </section>
      </div>
  );
}

export default Eventos;
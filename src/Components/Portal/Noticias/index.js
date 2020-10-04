import React from 'react';
import '../Noticias/style.css'

// import { Container } from './styles';

function Noticias() {
  return (
    <section id="noticias">
    <h2>Notícias</h2>
    <aside className="container_noticias" id='cont_noticias'>
    
    
        
 
        <div className="noticias">

            <div className="img-noticias">
                <img src={require('../../../assets/Img/sem-26.jpg')} alt=""/>
            </div>
         
                <h5>TFC - CONVOCATÓRIA</h5>
            <div className="entre">
                <div className="date">Data:<small>20/03/2020</small></div>
                <div className="autor">autor:<small>20/03/2020</small></div>
            </div>
                 <p>A UTANGA solicita aos caros Finalistas 2018/2019, que não foram contactad…</p>
            <div className="btn">
             <a href="/News" className="call">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 Continuar Lendo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>

        </div>
   
        <div className="noticias">
            <div className="img-noticias">
                <img src={require('../../../assets/Img/abert-111-jpg.jpg')} alt=""/>
            </div>
         
                <h5>ABERTURA DA SEMANA DE INTEGRAÇÃO ACADÉMICA</h5>
            <div className="entre">
                <div className="date">Data:<small>20/03/2020</small></div>
                <div className="autor">autor:<small>20/03/2020</small></div>
            </div>
                 <p>No âmbito do Ano Lectivo 2020,  deu-se início hoje (02/03), na UTANGA, a semana de integração académ…</p>
            <div className="btn">
             <a href="/News" className="call">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 Continuar Lendo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>

        </div>
   
        <div className="noticias">
            <div className="img-noticias">
                <img src={require('../../../assets/Img/mic-2.jpg')} alt=""/>
            </div>
         
                <h5>DIA 17 DE MARÇO INICIA O SEMINÁRIO DE CAPACITAÇÃO DOCENTE NA UTANGA</h5>
            <div className="entre">
                <div className="date">Data:<small>20/03/2020</small></div>
                <div className="autor">autor:<small>20/03/2020</small></div>
            </div>
                 <p>A Universidade Técnica de Angola - UTANGA, por intermédio da Vice-Reitoria para a Investigação Cient….</p>
            <div className="btn">
             <a href="/News" className="call">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 Continuar Lendo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>

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
  )
}

export default Noticias;
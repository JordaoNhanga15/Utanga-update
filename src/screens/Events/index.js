import React,{useEffect} from 'react';
import '../News/style.css'
import Head from '../../Components/Ui/head'
import Share from '../../Components/Ui/share'
import Contact from '../../Components/Portal/contactos'
import '../Events/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function Event() {
    useEffect(()=>{
        document.title='Eventos Utanga'
    },[])
  return (
      <section className='News_container'>
          <div><Head /></div>
          <div className='imgBac_newss'>
              <div className='date_news'><h1>03 <br/> <small>Dez</small> </h1></div>
              <div className='info_news'>
                  <h1>Exames de Acesso 2020</h1>
                  <h3><small>Por Luciana Neto</small> / <small>Dept. de comunicacao</small> / <small>Noticia</small> / <small><i class="fa fa-thumbs-up" aria-hidden="true"></i> 27</small> /  <small><i class="fa fa-star" aria-hidden="true"></i> 2.7</small> </h3>
              </div>
          </div>
          <div className='div_newss'>
              <aside className="text_info">
                  <h1>Exames de Acesso 2020</h1>
                  <p>
                  Os candidatos deverão fazer-se acompanhar obrigatoriamente do Bilhete de Identidade ou Passaporte e do comprovativo da inscrição (recibo). As listas físicas dos candidatos inscritos não serão publicadas, contudo, o candidato deverá consultar o seu nome no nosso site (www.utanga.co.ao), através do seu número de inscrição. E as salas onde irão decorrer os exames ser-vos-ão indicadas nos dias dos exames.
                  </p>
              </aside>
              <aside className="div_news_1a"><Share /></aside>
              <aside className='info_div_newss'>
                  <ul className='info_ul'>
                      <li><i class="fa fa-calendar" aria-hidden="true"></i><a href='q'>Date: <small>20/20/2020</small></a></li>
                      <li><i class="fa fa-clock-o" aria-hidden="true"></i><a href='q'>Hora: <small>20:20</small></a></li>
                      <li><i class="fa fa-map-marker" aria-hidden="true"></i><a href='q'>Location <small>Palanca</small></a></li>
                      <li><i class="fa fa-folder-open-o" aria-hidden="true"></i><a href='q'>Tipo de evento <small>Academico</small></a></li>
                      <li><i class="fa fa-user" aria-hidden="true"></i><a href='q'>Organizador <small>Utanga</small></a></li>
                      <li><i class="fa fa-phone" aria-hidden="true"></i><a href='q'>Telefone <small>949533505</small></a></li>
                  </ul>
              </aside>
          </div>


          <div className='anothers'>
          <a href='/'>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Anterior</a>

            <a href='/'>Outros Eventos</a>

          <a href='/'>Seguinte <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          </div>


          <footer>
              <Contact></Contact>
          </footer>
      </section>
  );
}

export default Event;
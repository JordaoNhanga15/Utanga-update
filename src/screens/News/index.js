import React,{useEffect} from 'react';
import '../News/style.css'
import Head from '../../Components/Ui/head'
import Share from '../../Components/Ui/share'
import Contact from '../../Components/Portal/contactos'
import '../News/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function News() {
    useEffect(()=>{
        document.title='Noticia Utanga'
    },[])
  return (
      <section className='News_container'>
          <div><Head /></div>
          <div className='imgBac_newse'>
              <div className='date_news'><h1>03 <br/> <small>Dez</small> </h1></div>
              <div className='info_news'>
                  <h1>Tfc convocatoria</h1>
                  <h3><small>Por Luciana Neto</small> / <small>Dept. de comunicacao</small> / <small>Noticia</small> / <small><i class="fa fa-thumbs-up" aria-hidden="true"></i> 27</small> /  <small><i class="fa fa-star" aria-hidden="true"></i> 2.7</small> </h3>
              </div>
          </div>
          <div className='div_newse'>
              <aside className="text_infose">
                  <h1>Tfc convocatoria</h1>
                  <p>
                  PROCESSO DE DEFESA DO TFCA UTANGA solicita aos caros Finalistas 2018/2019, que não foram contactados para a defesa do Trabalho Final do Curso - TFC, o favor, de contactarem os Chefes de DEI, nas suas respectivas Faculdades, o mais breve possível.Obrigada.
                  </p>
              </aside>
              <aside className="div_news_1as"><Share /></aside>
          </div>


          <div className='another'>
          <a href='/'>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Anterior</a>

            <a href='/'>Outras Noticias</a>

          <a href='/'>Seguinte <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          </div>


          <footer>
              <Contact></Contact>
          </footer>
      </section>
  );
}

export default News;
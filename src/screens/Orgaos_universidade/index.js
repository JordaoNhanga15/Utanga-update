import React,{useEffect} from 'react';
import Head from '../../Components/Ui/head'
// import Share from '../../Components/Ui/share'
import Contact from '../../Components/Portal/contactos'
import '../Orgaos_universidade/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function Orgaos() {

    useEffect(()=>{
        document.title='Orgaos da universidade'
    },[])

  return (
      <section className='News_container'>
          <div><Head /></div>
          <div className='imgBac_newsss'>
              {/* <div className='date_news'><h1>03 <br/> <small>Dez</small> </h1></div> */}
              <div className='info_newss'>
                  <h1>Orgaos de gestao</h1>
                  {/* <h3><small>Por Luciana Neto</small> / <small>Dept. de comunicacao</small> / <small>Noticia</small> / <small><i class="fa fa-thumbs-up" aria-hidden="true"></i> 27</small> /  <small><i class="fa fa-star" aria-hidden="true"></i> 2.7</small> </h3> */}
              </div>
          </div>

          
          <div className='div_newsea'>
              <aside className="text_infosa">
                  <h1>ORGÃOS DE GESTÃO</h1>
                  <h5>De acordo com o Estatuto Orgânico em vigor na UTANGA, são Órgãos de Gestão desta Instituição de Ensino Superior: Senado Universitário, Reitor da Universidade, Administrador.</h5>
                  <ul className="text_infos_ul">
                      <h5>O Senado Universitário é o órgão máximo do Governo da UTANGA. São membros do Senado Universitário:</h5> 
                      <li className="text_infos_ul_li">O Reitor;</li>
                      <li className="text_infos_ul_li">Os Vice-reitores e Pró-reitores,</li>
                      <li className="text_infos_ul_li">O Administrador;</li>
                      <li className="text_infos_ul_li">Os Directores dos Serviços Centrais;</li>
                      <li className="text_infos_ul_li">Os Decanos das Faculdades,</li>
                      <li className="text_infos_ul_li">Os Chefes de Departamentos de Ensino, Investigação e Produção;</li>
                      <li className="text_infos_ul_li">Os Coordenadores dos Centros de Investigação e Pós-Graduação;</li>
                      <li className="text_infos_ul_li">Dois Docentes Investigadores por cada Faculdade, em tempo integral;</li>
                      <li className="text_infos_ul_li"></li>
                  </ul>

                  <ul className="text_infos_ul">
                      <h5>Para o funcionamento da Universidade a nível central, execução das decisões e deliberações do seu governo, o Reitor dispõe dos seguintes órgãos de apoio e serviços executivos:</h5> 
                      <li className="text_infos_ul_li">Conselho de Direcção;</li>
                      <li className="text_infos_ul_li">Gabinete do Reitor;</li>
                      <li className="text_infos_ul_li">Gabinete de Avaliação Institucional;</li>
                      <li className="text_infos_ul_li">Gabinete Jurídico e Relações Internacionais;</li>
                      <li className="text_infos_ul_li">Gabinete de Estudo, Planeamento e Estatística;</li>
                      <li className="text_infos_ul_li">Gabinete de Coordenação de Estágios;</li>
                      <li className="text_infos_ul_li">Serviços Académicos;</li>
                      <li className="text_infos_ul_li">Serviços de Secretaria-Geral, bem como outros Serviços de apoio.</li>
                      <li className="text_infos_ul_li"></li>
                  </ul>
              </aside>
              {/* <aside className="div_news_1as"><Share /></aside> */}
          </div>
          <div className='text_facul'>
              <div className='himZKo'></div>
              <h3 className='hCuLgs'>Equipa de reitoria</h3>
              <div className='himZKo'></div>
          </div>
          <section className="teachers_area">
              <div className="work">
                  <h3>Doutor Albertino Candimba,PhD</h3>
                  <article>Cargo: Reitor</article>
                  <article>Email: Reitor</article>
                  <article>Telefone: 949533505</article>
              </div>
              <div className="work">
                  <h3>Doutor Albertino Candimba,PhD</h3>
                  <article>Cargo: Reitor</article>
                  <article>Email: Reitor</article>
                  <article>Telefone: 949533505</article>
              </div>
              <div className="work">
                  <h3>Doutor Albertino Candimba,PhD</h3>
                  <article>Cargo: Reitor</article>
                  <article>Email: Reitor</article>
                  <article>Telefone: 949533505</article>
              </div>
              <div className="work">
                  <h3>Doutor Albertino Candimba,PhD</h3>
                  <article>Cargo: Reitor</article>
                  <article>Email: Reitor</article>
                  <article>Telefone: 949533505</article>
              </div>
              <div className="work">
                  <h3>Doutor Albertino Candimba,PhD</h3>
                  <article>Cargo: Reitor</article>
                  <article>Email: Reitor</article>
                  <article>Telefone: 949533505</article>
              </div>
              <div className="work">
                  <h3>Doutor Albertino Candimba,PhD</h3>
                  <article>Cargo: Reitor</article>
                  <article>Email: Reitor</article>
                  <article>Telefone: 949533505</article>
              </div>
          </section>
          

          <footer>
              <Contact></Contact>
          </footer>
      </section>
  );
}

export default Orgaos;
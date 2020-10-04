import React,{useEffect} from 'react';
import Head from '../../Components/Ui/head'
// import Share from '../../Components/Ui/share'
import Contact from '../../Components/Portal/contactos'
import '../Historia/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function News() {
    useEffect(()=>{
        document.title='Historia Utanga'
    },[])
  return (
      <section className='News_container'>
          <div><Head /></div>
          <div className='imgBac_news'>
              {/* <div className='date_news'><h1>03 <br/> <small>Dez</small> </h1></div> */}
              <div className='info_news'>
                  <h1>Historia da UTANGA</h1>
                  <h3><small>Por Luciana Neto</small> / <small>Dept. de comunicacao</small> / <small>Noticia</small> / <small><i class="fa fa-thumbs-up" aria-hidden="true"></i> 27</small> /  <small><i class="fa fa-star" aria-hidden="true"></i> 2.7</small> </h3>
              </div>
          </div>
          <div className='div_news'>
              <aside className="text_infoS">
                  <h1>Historia da UTANGA</h1>

                  <p>A Universidade Tecnica de Angola abreviadamente designada UTANGA é a primeira Instituição de Formação 100% privada, vocacionada para o Ensino Superior Universitário nos vários domínios do saber, a investigação científica, a pós-graduação, a extensão universitária apoiando directamente à sociedade.



Criada no ano 2000 através do Decreto nº38/00 de 15 de Dezembro como Instituto Superior Privado de Angola tendo passado a Universidade em 2007, através do Decreto-lei nº 28 de 07 de Maio de 2007. Desde a sua criação, a UTANGA, tem se destacado em distintas áreas, que nos permite desde a sua criação a data presente, realçar o seguinte:

Primeira Universidade em Angola a realizar cerimónia de Outorga de Diplomas;
Primeira Universidade em Angola a oferecer e ministrar os cursos de Comunicação Social; Ciências Farmacêuticas; Odontologia; Fisioterapia; Psicologia Clínica; Gestão Hoteleira e Turística;
Em simultâneo com outra Instituição concorrente, foram as primeiras a ministrar e oferecer o curso de Relações Internacionais;
Primeira Universidade a oferecer e ministrar o curso de Mestrado em Gestão Hospitalar;
Primeira Universidade Privada a realizar (desde 2014) as jornadas da Comunicação, intitulada “Semana da Comunicação da UPRA”;
Primeira Universidade Privada a conquistar o título de Campeã Universitária em Basquetebol Masculinos;
Conquistou vários títulos em diversas modalidades desportivas universitárias (ténis de mesa; futebol 11; xadrez; Voleibol);
Primeira Instituição de Ensino Superior a formar Grupo Coral, que ao longo dos anos apresentou-se em vários palcos;


Desde o ano 2005 que ampliamos o nosso raio de intervenção com a criação e entrada em funcionamento de dois Pólos, sendo o Instituto Superior da Tundavala – Huíla (IPS Tundavala) e o Instituto Superior de Cabinda – Cabinda (IPS Cabinda);



Actualmente a UTANGA possui três Faculdades, sendo:

Faculdade de Ciências Exactas: Arquitectura e Urbanismo; Engenharia Civil; Engenharia Informática; Engenharia Mecânica.
Faculdade de Ciências Sociais Humanas e Politicas: Comunicação Social; Gestão e Contabilidade; Psicologia; Relações Internacionais; Turismo e Gestão Hoteleira.
Faculdade de Ciências da Saúde: Ciências Farmacêuticas; Enfermagem; Fisioterapia; Medicina; Odontologia.


A alta administração da Universidade, tem feito um contínuo esforço de qualificação do seu corpo docente, de actualização dos seus equipamentos e de renovação das suas práticas pedagógicas, tendo sempre em vista um ensino que apenas se subordina aos princípios da qualidade, da ética e do rigor científico. Com estes objectivos, a UPRA tem estabelecido um conjunto de convénios com diversidades Instituições nacionais e internacionais, que permitem aos estudantes e não só, oportunidade de aceder aos vários programas de intercâmbio.

Até 2018 a UTANGA formou e lançou ao mercado mais de 5 mil Licenciados em distintas áreas e um número considerável de Mestres na área de Gestão Hospitalar.



Na expectativa de responder as exigências do presente, a UPRA assumiu e tudo tem feito para concretizar o Campus Policlínico Universitário – uma estrutura imponente que irá suportar o ensino, aulas práticas, pesquisa, actividades de extensão universitária e não só dos cursos de saúde. Estamos a desenvolver o projecto de reordenamento urbano da longínqua comuna do Dando, província do Bié, município do Nharea, que irá proporcionar maior qualidade de vida aos habitantes da referida comuna, pois, entendemos que a formação universitária não pode reduzir-se a uma mera instrução técnica, orientada para o desempenho de uma profissão.



Queremos continuar a crescer, fazendo com que mais angolanos através da formação, do treinamento, da investigação, estejam mais bem capacitados para apoiar a construção de uma Angola próspera e integradora.
                  </p>
              </aside>
              <aside className="div_news_1a">
                  <img src={require('../../assets/Img/0,6fabb620-4a3e-4032-90f0-e481f837780d.jpg')} className='img_div_news_1a' width="500px" height="400px"/>
                  </aside>
          </div>


          {/* <div className='another'>
          <a href='/'>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Anterior</a>

            <a href='/'>Outras Noticias</a>

          <a href='/'>Seguinte <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          </div> */}


          <footer>
              <Contact></Contact>
          </footer>
      </section>
  );
}

export default News;
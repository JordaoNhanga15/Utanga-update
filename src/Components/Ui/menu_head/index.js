import React,{useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../menu_head/style.css'

// import { Container } from './styles';

function Menu_head() {
  

      function trocarIcone(){

        const html={
          icone:document.querySelector('#ico'),
          ul:document.querySelector('.nav-listtt'),
          container:document.querySelector('.container_nav')
         }

        function init(){
          html.icone.addEventListener('click',selectElement)
        }
        function selectElement(e){
          html.ul.classList.contains('contsa') ? dele(e): update(e)
        }
        function  update(e){
          html.ul.classList.add('contsa')
          html.container.style.height='100vh'
          e.target.setAttribute('class','fa fa-times')
        }
        function dele(e){
          html.ul.classList.remove('contsa')
          html.container.style.height='70vh'
          e.target.setAttribute('class','fa fa-bars')
        }
        return{
          init
        }
      }

      useEffect(()=>{
        const selectTab=trocarIcone()
        selectTab.init()
      },[])

  return (
    <ul className="cursos_ul">
    <li className="logo_content">
        <div><a href='/'>UTANGA</a></div>
        <div className='menuu'><i className="fa fa-bars" aria-hidden="true" id="ico"></i></div>
    </li>
    <div className="nav-listtt">
    <li><a href="3">Cursos <i className="fa fa-arrow-down" aria-hidden="true" ></i></a>
    <ul className="subs-menu sn" id="tab-links">
        <li data-id="Arquitectura" data-open><a>Arquitectura e urbanismo</a></li>
        <li data-id="Telecomunicacoes"><a>Engenharia de Telecomunicacoes e Electronica</a></li>
        <li data-id="Geologia"><a>Engenharia de Geologia e Minas</a></li>
        <li data-id="Civil"><a>Engenharia Civil</a></li>
        <li data-id="Ambiente"><a>Engenharia do Ambiente</a></li>
        <li data-id="Informatica"><a>Engenharia Informatica</a></li>
    </ul>
    </li>
    <li><a href="3">Investigacao <i className="fa fa-arrow-down" aria-hidden="true"></i></a>
    <ul className="subs-menu" id="inve">
        <li><a href="3">Projectos</a></li>
      </ul>
    </li>
    <li><a href="3">Extensao Universitaria <i className="fa fa-arrow-down" aria-hidden="true"></i></a>
    <ul className="subs-menu" id="exten">
        <li><a href="3">Projectos</a></li>
      </ul>
    </li>
    </div>
</ul>
  );
}

export default Menu_head;
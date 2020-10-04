import React,{useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../Menu/style.css'

// import { Container } from './styles';

function Menu() {

    function HandleBanner(){
      const $=document.querySelector.bind(document)
      const html={
        icone:$('#icom'),
        navList:$('.nav-listttm')
      }
      const removeClass=(elem)=>html.navList.classList.remove(elem)
      const addClass=(elem)=>html.navList.classList.add(elem)
      const setAtri = (classa,e)=>e.target.setAttribute('class',classa)

      function visible(e){
        setAtri('fa fa-close',e)
        addClass('contsama')
      }
      function unvisible(e){
        setAtri('fa fa-bars',e)
        removeClass('contsama')
      }

      function verify(e){
        html.navList.classList.contains('contsama')?unvisible(e):visible(e)
      }
      function Init(){
        html.icone.addEventListener('click',verify)
      }
      return{
        Init
      }
    }

    useEffect(()=>{
      const Troca=HandleBanner()
      Troca.Init()
    },[])

    function tabNavigation(){
      const $=document.querySelector.bind(document)
      const html={
      links:[...$('#tab-linksm').children],
      contents:[...$('.tab-contentz').children],
      openTab:$('[data-open]')
    }

    function hideAlltab(){
      html.contents.forEach((val,ind,arr)=>{
        html.contents[ind].style.display='none'
      })
    }
    function showCurrentTab(id){
      const tabcontent=$('#'+id)
      tabcontent.style.display='block'
    }
    function selectTab(event){
      hideAlltab()
      RemoveAllActiveClass()
      const target=event.currentTarget;
      showCurrentTab(target.dataset.id)
      target.className += " active"
    }
    function listenForChanges(){
      html.links.forEach((elem,ind,arr)=>{
        elem.addEventListener('click',selectTab)
        //console.log(elem)
      })
    }
    function RemoveAllActiveClass(){
      html.links.forEach(tab=>{
        tab.className=tab.className.replace(" active","")
      })
    }
      function Init(){
        hideAlltab()
        listenForChanges()
        html.openTab.click()
      }
      return{
        Init
      }
    }

    useEffect(()=>{
      const tabN=tabNavigation()
      tabN.Init()
    },[])


  return (
    <aside className="menu_dashboard">
        <ul className="cursos_ulm">
    <li className="logo_contentm">
        <div><a href='/'>UTANGA</a></div>
        <div className='menuum'><i className="fa fa-bars" aria-hidden="true" id="icom"></i></div>
    </li>
    <div className="nav-listttm">
    <li><a href="3"><i class="fa fa-book" aria-hidden="true"></i> <div className="a_menu">Area Academica</div></a>
    <ul className="subs-menum snm" id="tab-linksm">
        <li data-id="Dados_Academicos" data-open><a>Dados Academicos</a></li>
        <li data-id="N_Individuais"><a>Notas individuais</a></li>
        <li data-id="N_Colectivas"><a>Notas Colectivas</a></li>
        <li data-id="Con_Matri"><a>Confirmacao da Matricula</a></li>
        <li data-id="re_Matri"><a>Reconfirmacao da Matricula</a></li>
        <li data-id="D_Atraso"><a>Disciplinas em atraso</a></li>
    </ul>
    </li>
    <li><a href="3"><i class="fa fa-money" aria-hidden="true"></i> <div className="a_menu">Area Financeira</div></a>
    <ul className="subs-menum" id="invenm">
        <li><a href="3">Extracto Financeiro</a></li>
        <li><a href="3">Ver Borderaux</a></li>
        <li><a href="3">Unir recibos</a></li>
        <li><a href="3">tabelas das Multas</a></li>
      </ul>
    </li>
    <li><a href="3"><i class="fa fa-university" aria-hidden="true"></i> <div className="a_menu"> Area Administrativa</div></a>
    <ul className="subs-menum" id="extenm">
        <li><a href="3">Solicitar Declaracoes</a></li>
        <li><a href="3">Modelos e Requerimentos</a></li>
      </ul>
    </li>
    <li><a href="3"><i class="fa fa-commenting-o" aria-hidden="true"></i>  <div className="a_menu"> Servicos</div></a>
    <ul className="subs-menum" id="extenm">
        <li><a href="3">Solicitar Servicos</a></li>
        <li><a href="3">Consultar Servicos</a></li>
      </ul>
    </li>
    <li><a href="3"><i class="fa fa-graduation-cap" aria-hidden="true"></i> <div className="a_menu">Monografia</div></a>
    <ul className="subs-menum" id="extenm">
        <li><a href="3">Inscricao</a></li>
      </ul>
    </li>
    <li><a href="3"><i class="fa fa-file-o" aria-hidden="true"></i> <div className="a_menu">Documentos</div></a>
    <ul className="subs-menum" id="extenm">
        <li><a href="3">Ver documentos</a></li>
      </ul>
    </li>
    <li><a href="3"><i class="fa fa-file-o" aria-hidden="true"></i> <div className="a_menu">Votacao</div></a>
    <ul className="subs-menum" id="extenmc">
        <li><a href="3">Ver Provas</a></li>
      </ul>
    </li>
    </div>
</ul>
    </aside>
    );
}

export default Menu;
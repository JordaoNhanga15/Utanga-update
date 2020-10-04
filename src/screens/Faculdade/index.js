import React,{useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../Faculdade/style.css'
import Curso_Head from '../../Components/Ui/cursos_head'
import Cursos from '../../Components/Portal/cursos'

// import { Container } from './styles';


function Faculdade_Aba() {

    function tabNavigation(){
        const $=document.querySelector.bind(document)
        const html={
            links:[...$('#tab-links').children],
            contents:[...$('.tab-content').children],
            openTab:$('[data-open]')
        }
        function hideAllTab(){
            html.contents.forEach(cont=>{
                cont.style.display='none'
            })
        }
        function showCurrentTab(id){
            const tab=$('#'+id)
            tab.style.display='block'
        }
        function selectTab(event){
            hideAllTab()
            removeActiveClass()
         const target=event.currentTarget
         showCurrentTab(target.dataset.id)   
         target.className += " active"
        }

        function removeActiveClass(){
            html.contents.forEach(cons=>{
                cons.className=cons.className.replace(' active','')
            })
        }

        function listenForChange(){
            html.links.forEach(cont=>{
                cont.addEventListener('click',selectTab)
            })
        }

        function init(){
            hideAllTab()
            listenForChange()
            html.openTab.click()
        }
        return{
            init
        }
    }
    
    
    useEffect(()=>{
        document.title="Faculdade de engenharia";
        const tabNav=tabNavigation()
        tabNav.init();
    })


  return (
      <div className="container_Facul">
          <main className='header_facu'>
                <Curso_Head />
          </main>
          <main>
              <Cursos />
          </main>
      </div>
  );
}

export default Faculdade_Aba;
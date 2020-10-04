import React,{useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../header/style.css'


// import { Container } from './styles';

function Header( props) {

    const setAtribute=(e,x,y)=>{
        e.target.setAttribute(x,y)
    }
    const gridTemplateColumns=(e,y)=>{
        e.style.gridTemplateColumns=y 
    }
    const gridGap=(e,y)=>{
        e.style.gridGap=y 
    }
    const display=(e,y)=>{
        e.style.display=y 
    }
    const Animation=(e,y)=>{
        e.style.animation=y 
    }
    function Hand(){
        const html={
          portal_b:document.querySelector('#portal_b'),
          Portal:document.querySelector('#Portalf'),
          cont_noticias:document.querySelector('#cont_noticias'),
          potal_a:document.querySelector('#potal_a'),
          menu_icon:document.querySelector('#menu_icon')
        }
        
    function handleTarget(e){
         
        if(e.target.classList.contains('fa-bars')){
            setAtribute(e,'class','fa fa-times')
            gridTemplateColumns(html.Portal,'760px 420px')
            gridGap(html.Portal,'10px')
            gridTemplateColumns(html.cont_noticias,'1fr 1fr')
            display(html.portal_b,'block')
            html.portal_b.addEventListener('animationstart',(event)=>{
                (event.animationName==='portal')? Animation(html.potal_a,'portal__a 1.5s ease-out forwards')  :Animation(html.potal_a,'portal__a 1.5s ease-out forwards')
            })
        }else{
            Animation(html.potal_a,'portal__a1 2s ease-in-out forwards')
            gridTemplateColumns(html.Portal,'1fr')
            gridTemplateColumns(html.cont_noticias,'1fr 1fr 1fr')
            gridGap(html.Portal,'0px')
            display(html.portal_b,'none')
            setAtribute(e,'class','fa fa-bars')
        }
      }
      function click(){
        html.menu_icon.addEventListener('click',(e)=>{
            handleTarget(e)
        })
      }
      function init(){
        click()
      }
      return{
          init
      }
    }
    useEffect(()=>{
        const icon=Hand()
        icon.init()
    },[])

  return (
      <header className='header'>
          
          <aside className='start'>
            <div className='start_a'>
               
                <a href="/" className="a_utanga">Utanga</a>
            </div>
            <div className='start_b'>
                <ul>
                    <li className='li_start_b'><a href='#s' className='acesso'><span className='span_a_li_start'>Acesso Reservado</span><i class="fa fa-user-o" aria-hidden="true"></i></a>
                    <ul>
                        <li>
                            <a href="/Login">estudantes & Professores</a>
                        </li>
                        <li>
                            <a href="/Login">Funcionarios Admistrativos</a>
                        </li>
                    </ul>
                    </li>
                </ul>
            
            <i className="fa fa-bars" aria-hidden="true" id='menu_icon'></i>
            </div>
          </aside>                 
          <section className='center'>
              <h1 id='banner-title'>Aprenda agora</h1>
              <div className='banner-underline'></div>
               <h3 className='banner-subtitle'>Junta-te a uma comunidade de pessoas preocupadas em preparar o seu futuro hoje.</h3> 
               <a href='/inscricao'><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Seja um estudante</a>
          </section>
      </header>
  );
}

export default Header;
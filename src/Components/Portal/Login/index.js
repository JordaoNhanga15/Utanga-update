import React,{useEffect} from 'react';
import '../Login/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function Login(props) {
    let history=props.his;
    useEffect(()=>{
        document.title="Login"
    },[])

    function Animation(props){
        const $=document.querySelector.bind(document)
        const html={
            container:$('.container'),
             body:$('body'),
             btn:$('#btn_login'),
             textBox:[...document.querySelectorAll('.textBox')]
        }
        const contEve=(eve,nameAnimation,t,cl)=>{
            html.container.addEventListener(eve,(event)=>{
                if(event.animationName===nameAnimation){
                    remoCLass(t,cl)
                }
            })
        }
        const addCLass=(t,cl)=>t.classList.add(cl)
        const remoCLass=(t,cl)=>t.classList.remove(cl)
        const mudarPlace=(ind)=>html.textBox[ind].style.placeholder='Digite por favor'

        function nono(){
            addCLass(html.container,'No')
            contEve('animationend','no_no',html.container,'No')
        }
        function down(){
                addCLass(html.container,'button_login')
                contEve('animationend','down',html.container,'button_login')
                history.push('/Perfil')
                //console.log(history)
        }
        function animate(e){
            html.textBox.map((text,ind,arr)=>{
                if(html.textBox[0].value==="" || html.textBox[1].value===""){
                    if(text.value===""){
                        text.placeholder='Digite ,este e um campo obrigatorio' 
                        nono()             
                    }
                }
                else{
                    down()
                }
            },false)
        }
        
        function init(){
            html.btn.addEventListener('click',animate,false)
        }
        return{
            init
        }
    }

    useEffect(()=>{
        const Ani=Animation()
        console.log(history)
        Ani.init()
    },[])

  return (
    <div id="conta">
    <div className="container">
        <div className="eimk_header">
            <img src={require("../../../assets/Img/Sem Títulos1.jpg")} alt="" />
            <h4>Universidade Técnica de angola</h4>
        </div>
        <div className="eimk_body">
            <h4>Acesso Reservado</h4>
            <h4>Estudantes & Professores</h4>
            <div className="place-container">
            <div className="place">
            {/* <img src={require("../../../assets/Img/user_40px.png")} alt="" /> */}
            <div className="i_login">
            <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <input type="text" placeholder="Nº de matricula" className="textBox" required/>
            </div>
            <div className="place">
                {/* <img src={require("../../../assets/Img/password_30px.png")} alt="" /> */}
                <div className="i_login">
                <i class="fa fa-lock" aria-hidden="true"></i>
                </div>
                <input type="password" placeholder="Palavra-passe" className="textBox" required/>
            </div>
        </div>
        <div className="btn_login">
            <button id="btn_login">Validar dados de acesso  <i class="fa fa-unlock-alt" aria-hidden="true"></i></button>
        </div>
        </div>
    </div>
</div>
  );
}

export default Login;
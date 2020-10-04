import React,{useEffect,useState} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../Perfil/style.css'
import '../style.css'

function Perfil() {
    // const [Iniit,setInit]=useState({})
    // const getStyle=(elem,style)=>
    //     window.getComputedStyle(elem).getPropertyValue(style)
    
    // const html=document.querySelector('html')
    // const InitialColors={
    //     bg:getStyle(html,'--bg'),
    //     bgPanel:getStyle(html,"--bg-panel"),
    //     colorHeadings:getStyle(html,"--color-headings"),
    //     colorText:getStyle(html,"--color-text"),
    //     BackCheck:getStyle(html,"--bac-check"),
    //     backPas:getStyle(html,"--bg-pas"),
    //     boxShadow:getStyle(html,'--box-shadow'),
    //     bagUl:getStyle(html,'--bg-ul'),
    // }
    // useEffect(()=>{
    //             setInit(InitialColors)
    // },[])
    // let colorInitial=Iniit
    // console.log(Iniit)

        function HandleDark(){
            
            // const $=document.querySelector.bind(document)
            const html={
                checkBox:document.querySelectorAll('#switch'),
                Html:document.querySelector('html')
            }
            const transformKey=key=>"--" + key.replace(/([A-Z])/,"-$1").toLowerCase()
            const darkColors={
                bg:'#333333',
                bgPanel:"#434343",
                colorHeadings:"#3664ff",
                colorText:"#f5f5f5",
                bgUl:'rgb(26, 23, 22)',
                bacCheck:'#65A1E2',
                bgPas:'#ebebeb'
              }
              const LightColors={
                bg:'#fff',
                bgPanel:"#ccc",
                colorHeadings:":#0077ff",
                colorText:"#1b1a1a",
                bgUl:'#b99783',
                bacCheck:'#092c3e',
                bgPas:'#333'
              }

            const changeColors=(colors)=>{
                // console.log(colors)
                Object.keys(colors).map(key=>{
                    return html.Html.style.setProperty(transformKey(key), colors[key])
                })
            }

            function Dark(e){
                e.target.checked? changeColors(darkColors):changeColors(LightColors)
            }
            function init(){
                html.checkBox.forEach(check=>{
                    check.addEventListener('change',Dark)
                })
            }
            return{
                init
            }
        }

        useEffect(()=>{
            const Dark=HandleDark()
            Dark.init()
        },[])



  return (
      <aside className="profile_container">
          {/* <div className="as">
          <a href="/">UTANGA</a>
          </div> */}
          <div className="awq">
          <div className="profile_dashboard">
          <div className="img_dcon">
              <div className="img_div">
              <div className="img"><img src={require('../../../assets/Img/39992265_2222319514650207_3919195818384424960_o.jpg')}/></div>
              <div className="icone_img"><i class="fa fa-plus" aria-hidden="true"></i></div>
              </div>
              <div className="info" id="sa">
                  <h4> <small>Jordao Nhanga de Oliveira</small></h4>
              </div>
              <div className="detal">
                  <a href="w3"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Estudante</a>
                  <div>
                  <i class="fa fa-sort-desc" aria-hidden="true" id="detalI"></i>
                  </div>
              </div>
          </div>
          <div className="profile_info">
              
              <div className="info" id="sa">
                  <h4><small>Jordaonhanga7@gmail.com</small></h4>
                  
              </div>
              <div className="info">
                  <h4>Sala: <small>05</small></h4>
                  <h4>Turma: <small>EIMK 3.1</small></h4>
              </div>
              <div className="info" >
                  <h4>Modo: <small>Escuro</small></h4>
                  <div className="toggle">
                      <input type="checkbox" id="switch" name="theme" />
                      <label for="switch" className="label_toggle">target</label>
                  </div>
              </div>
          </div>

          {/* <div className="btn_logout">
              <div>
              <button><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
              </div>
          </div> */}
          
          </div>
          
          <div className="btn_logout">
              <div>
              <button><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
              </div>
          </div>

          </div>
      </aside>
  );
}

export default Perfil;
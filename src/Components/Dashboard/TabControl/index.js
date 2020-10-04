import React,{useEffect} from 'react';
import '../TabControl/style.css'
import '../style.css'
import 'font-awesome/css/font-awesome.min.css'
// import { Container } from './styles';

function TabControl() {

    function handlebutton(){
        const $=document.querySelector.bind(document)
        const html={
            icone:$('#icone_dados'),
            button_footer:$('.button_footer'),
            input_footer:document.querySelectorAll('.input-footer')
        }
        function visible(e){
            e.target.setAttribute('class','fa fa-pencil')
            html.button_footer.classList.add('buttonFooter')
            html.input_footer.forEach(input=>{
                input.removeAttribute('disabled',false)
            })
        }
        function unvisible(e){
            e.target.setAttribute('class','fa fa-pencil-square-o')
            html.button_footer.classList.remove('buttonFooter')
            html.input_footer.forEach(input=>{
                input.setAttribute('disabled',true)
            })
        }
        function verify(e){
             html.button_footer.classList.contains('buttonFooter') ? unvisible(e):visible(e)
        }
        function init(){
            html.icone.addEventListener('click',verify)
        }
        return {
            init
        }
    }

    useEffect(()=>{
        document.title="Utanga Dashboard"
    },[])

    useEffect(()=>{
        const handle=handlebutton()
        handle.init()
    },[])

  return (
        <div className="tab-contentz">
            <section id="Dados_Academicos">
                <div className="imgg">
            <div className="img_divv">
              <div className="imgg"><img src={require('../../../assets/Img/39992265_2222319514650207_3919195818384424960_o.jpg')}/></div>
              <div className="icone_img" id="icone_dados"><i class="fa fa-pencil-square-o" aria-hidden="true" id=""></i></div> 
              </div>
                <div className="inf">
                    <h2>Jordao Oliveira</h2>
                </div>
                </div>
                <div className="dados_info">
                    <aside className="dados_a">
                        <div className="dados">
                        <h4>Jordao Nhanga de Oliveira</h4>
                        <h4>Nº<small> 034531/18</small></h4>
                        </div>
                        <div className="dados">
                        <h4>Campus:<small>Kilamba Kiaxi</small></h4>
                        <h4>Faculdade:<small>Engenharia</small></h4>
                        </div>
                        <div className="dados">
                        <h4>Curso:<small>Engenharia Informatica</small></h4>
                        <h4>Turma:<small>EIMK 3.1</small></h4>
                        </div>
                        
                        <div className="infosas" >
                  <h4>Modo: <small>Escuro</small></h4>
                  <div className="toggle">
                      <input type="checkbox" id="switch" name="theme" />
                      <label for="switch" className="label_toggle">target</label>
                  </div>
              </div>
                    </aside>
                </div>
            <div className="footer_dados">
                <div className="footer_e">
               <div className="footer">
               <i class="fa fa-map-marker" aria-hidden="true"></i><input type="text" placeholder={`${'Palanca'}` } disabled className="input-footer"/>
                </div> 
                <div className="footer">
                <i class="fa fa-envelope" aria-hidden="true"></i> <input type="text" placeholder={`${'Jordaonhanga7@gmail.com'}` } disabled className="input-footer"/>
                </div> 
                <div className="footer">
                <i class="fa fa-mobile" aria-hidden="true"></i><input type="text" placeholder={`${'+244 949 533 505'}` } disabled className="input-footer"/>
                </div> 
                </div>
                <div className="footer_button">
                    <button className="button_footer">Guardar <i class="fa fa-floppy-o" aria-hidden="true"></i></button>
                </div>
                </div>
            </section>
            <section id="N_Individuais">
            <div className="flex1">
                    <div className="input_contas">
                        <h4>Ano Academico</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
            </div>
                    <div className="footer_button">
                        <button className="button_footerd"><i class="fa fa-print" aria-hidden="true"></i> Imprimir</button>
                        </div>
            </div>
            <table className="n_individuais">

                <tr className="tr">
                    <tr>
                    <th>Ano</th>
                    </tr>
                <tr>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                    <td>2020</td>
                </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>Cadeiras</th>
                    </tr>
                    <tr>
                    <td>Base de Dados</td>
                    <td>Fundamentos de Programacao</td>
                    <td>Matematica Discreta</td>
                    <td>Sistemas digitais</td>
                    <td>Sistemas Operativos</td>
                    <td>Algoritmos e Estrutura de Dados</td>
                    <td>Base de Dados II</td>
                    <td>Redes de computadores</td>
                    <td>Estatisticas</td>
                    <td>Introducao a gestao</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>Regime</th>
                    </tr>
                    <tr>
                    <td>1 simestre</td>
                    <td>1 simestre</td>
                    <td>1 simestre</td>
                    <td>1 simestre</td>
                    <td>1 simestre</td>
                    <td>2 simestre</td>
                    <td>2 simestre</td>
                    <td>2 simestre</td>
                    <td>2 simestre</td>
                    <td>2 simestre</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>P1</th>
                    </tr>
                    <tr>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>P2</th>
                    </tr>
                    <tr>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>P3</th>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>Media</th>
                    </tr>
                    <tr>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>OBS</th>
                    </tr>
                    <tr>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    <td>Dispensado</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>Exame</th>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>Resultado</th>
                    </tr>
                    <tr>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    <td>apto</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>EPS</th>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>   
                </tr>
                <tr className="tr">
                   <tr>
                    <th>Rec</th>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>NF</th>
                    </tr>
                    <tr>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    </tr>
                </tr>
                <tr className="tr">
                    <tr>
                    <th>Estado</th>
                    </tr>
                    <tr>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    <td>Apto</td>
                    </tr>
                </tr>
            </table>

            </section>
            <section id="N_Colectivas"></section>
            <section id="Con_Matri">
            <div className="grids">
                    <div className="input_contas">
                        <h4>Ano</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                    </div>
                    <div className="input_contas">
                        <h4>Especialidade</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                    </div>
                    <div className="input_contas">
                        <h4>Turma</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                    </div>
                </div>
            <div className="footer_button">
                        <button className="button_footerd"><i class="fa fa-check" aria-hidden="true"></i> Efectuar Confirmacao</button>
                </div>
            </section>
            <section id="re_Matri">
                <div className="grids">
                    <div className="input_contas">
                        <h4>Ano</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                    </div>
                    <div className="input_contas">
                        <h4>Especialidade</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                    </div>
                    <div className="input_contas">
                        <h4>Turma</h4>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                    </div>
                </div>
                <div className="footer_button">
                        <button className="button_footerd"><i class="fa fa-check" aria-hidden="true"></i> Efectuar Reconfirmacao</button>
                </div>
            </section>
            <section id="D_Atraso"></section>
            <section id=""></section>
        </div>
    );
}

export default TabControl;
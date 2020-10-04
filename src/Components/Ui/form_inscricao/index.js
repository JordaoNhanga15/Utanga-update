import React from 'react';
import '../form_inscricao/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function Form_Inscricao() {
  return (
        <div className="container_form">
            <div className="container_textBox">

            <div className="textBox" id="first_textB">
                    <h2>Dados do Estudante</h2>
                   
                    <section className="work">
                    <div className="grid_" id="name_grid">
                        <div className="input_conta" id="name">
                            <div className="">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <input type="text" placeholder="Nome completo"/>
                            </div>
                        </div>
                        </div>
                        <div className="grid_">
                        <div className="input_conta">
                        <h3>Nacionalidade</h3>                    
                            <div>
        
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>Provincia</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>Municipio</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="grid_">
                        <div className="input_conta">
                        <h3>data de emissao</h3>
                        <div>
                            <i class="fa fa-calendar-o" aria-hidden="true"></i>
                            <input type="text" placeholder="EX: 10/12/1999"/>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>Sexo</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>Estado Civil</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="grid_" id="docss">
                        <div className="input_conta">
                        <h3>Tipo de cod. de Identificacao</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>N de doc. de Identificacao</h3>
                        <div>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                            <input type="text" placeholder="N de identificao"/>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Data de Validade</h3>
                        <div>
                            <i class="fa fa-calendar-o" aria-hidden="true"></i>
                            <input type="text" placeholder="Ex: 10/10/2020"/>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Local de Emissão</h3>
                        <div>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <input type="text" placeholder="Ex: Luanda"/>
                            </div>
                        </div>
                        </div>
                        <div className="grid_">
                        <div className="input_conta">
                        <h3>Telefone</h3>
                        <div>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                            <input type="text" placeholder="Ex: Telefone"/>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Email</h3>
                        <div>
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <input type="text" placeholder="Ex: Email"/>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Morada</h3>
                        <div>
                            <i class="fa fa-location-arrow" aria-hidden="true"></i>
                            <input type="text" placeholder="Ex: Morada"/>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>

                <div className="textBox">
                    <h2>Filiacao</h2>
                    <section className="work">
                        
                            <div className="grid_" id="name_grid">
                            <div className="input_conta" id="name">
                            <h3>Nome completo do <small>Pai</small></h3>
                            <div className="">
                            <i class="fa fa-male" aria-hidden="true"></i>
                            <input type="text" placeholder="Nome completo do Pai"/>
                            </div>
                        
                            </div>
                            </div>
                            <div className="grid_">
                            <div className="input_conta">
                            <h3>Profissao</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                            </div>

                            <div className="input_conta">
                            <h3>Nacionalidade</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                            </div>
                        
                            <div className="input_conta">
                            <h3>Situacao</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                            </div>
                    </section>

                    <section className="work">
                        
                            <div className="grid_" id="name_grid">
                            <div className="input_conta" id="name">
                            <h3>Nome completo do <small>Mae</small></h3>
                            <div className="">
                            <i class="fa fa-male" aria-hidden="true"></i>
                            <input type="text" placeholder="Nome completo do Pai"/>
                            </div>
                        
                            </div>
                            </div>
                            <div className="grid_">
                            <div className="input_conta">
                            <h3>Profissao</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                            </div>

                            <div className="input_conta">
                            <h3>Nacionalidade</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                            </div>
                        
                            <div className="input_conta">
                            <h3>Situacao</h3>
                            <div>
                            
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                            </div>
                    </section>
                </div>

                <div className="textBox">
                    <h2>Dados Sobre o Ensino Medio</h2>
                    <section className="work">

                        <div className="grid_">
                    <div className="input_conta">
                        <h3>Area de Formacao</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Curso Medio</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Instituicao Escolar</h3>
                        <div>
                            <i class="fa fa-institution" aria-hidden="true"></i>
                            <input type="text" placeholder="Local onde frequentou o ensino medio"/>
                            </div>
                        </div>

                        </div> 

                        <div className="grid_">
                    <div className="input_conta">
                        <h3>Ano da conclusao</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Media Final do Curso</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        <div className="input_conta">
                        <h3>Classe</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        </div> 

                    </section>
                </div>

                <div className="textBox">
                    <h2>Dados do curso superior a que se candidata</h2>
                    <section className="work">
                    <h3>1 opcao</h3>
                        <div className="grid_">
                        <div className="input_conta">
                        <h3>campus</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>faculdades</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>Cursos</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        </div>
                        <div className="grid_" id="grid_22">
                        <div className="input_conta">
                        <h3>Periodo</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        
                        <div className="input_conta">
                        <h3>Observacao</h3>
                        <div>
                            <i class="fa fa-info" aria-hidden="true"></i>
                            <input type="text" placeholder="observacao"/>
                            </div>
                        </div>

                        </div>
                    </section>

                    <section className="work">
                    <h3>2 opcao</h3>
                    <div className="grid_">
                        <div className="input_conta">
                        <h3>campus</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>faculdades</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        <div className="input_conta">
                        <h3>Cursos</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>

                        </div>
                        <div className="grid_" id="grid_22">
                        <div className="input_conta">
                        <h3>Periodo</h3>
                            <div>  
                            <select name="">
                                <option value="1" selected>--Selecionar--</option>
                                <option value="1">Ola</option>
                                <option value="1">Ola</option>
                            </select>
                            </div>
                        </div>
                        
                        <div className="input_conta">
                        <h3>Observacao</h3>
                        <div>
                            <i class="fa fa-info" aria-hidden="true"></i>
                            <input type="text" placeholder="observacao"/>
                            </div>
                        </div>

                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default Form_Inscricao;
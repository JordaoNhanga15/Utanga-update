import React from 'react';
import '../Menu/style.css'
import 'font-awesome/css/font-awesome.min.css';
// import { Container } from './styles';

function Menu() {
  return (
    <aside className='menu'>
      <ul className='nav-list'>
          <li><a href='#d'>A universidade <i class="fa fa-arrow-down" aria-hidden="true"></i></a> 
          <ul className='sub-menu'>
            <li><a href='/Historia'>Historia</a></li>
            <li><a href='3f'>Reitoria</a></li>
            <li><a href='3f'>Missao</a></li>
            <li><a href='/Orgaos'>Orgaos da Universidade</a></li>
            <li><a href='3f'>Campus</a></li>
          </ul>
          </li>
          <li><a href='#d'>faculdade <i class="fa fa-arrow-down" aria-hidden="true"></i></a>
          <ul className='sub-menu'>
            <li><a href='/Faculdade'>Faculdade de engenharia <i class="fa fa-arrow-down" aria-hidden="true"></i></a>

            <ul className='sub-menu'>
            <li><a href='/Faculdade' >Engenharia Informatica</a></li>
            <li><a href='/Faculdade'>Engenharia de telecomunicacoes</a></li>
            <li><a href='/Faculdade'>Engenharia de Gelogia e minas</a></li>
            <li><a href='/Faculdade'>Engenharia Civil</a></li>
            <li><a href='/Faculdade'>Engenharia do Ambiente</a></li>
            </ul>

            </li>
            <li><a href='/Faculdade'>Faculdade de gestão e ciências económicas <i class="fa fa-arrow-down" aria-hidden="true"></i></a>
            <ul className='sub-menu'>
            <li><a href='/Faculdade'>Contabilidade e Financas</a></li>
            <li><a href='/Faculdade'>gestao</a></li>
            </ul>

            </li>

            <li><a href='/Faculdade'>Faculdade de letra e Ciências sóciais <i class="fa fa-arrow-down" aria-hidden="true"></i></a>
            <ul className='sub-menu'>
            <li><a href='/Faculdade'>Direito</a></li>
            <li><a href='/Faculdade'>Lingua e literatura inglesa</a></li>
            <li><a href='/Faculdade'>Psicologia</a></li>
            <li><a href='/Faculdade'>Relacoes internacionais</a></li>
            </ul>
            </li>
          </ul>
          </li>
          <li><a href='#d'>Candidatura <i class="fa fa-arrow-down" aria-hidden="true"></i></a>
          <ul className='sub-menu'>
            <li><a href='/inscricao'>Inscrição para Licenciatura</a></li>
            <li><a href='/inscricao'>Inscrição para Mestrado</a></li>
          </ul>
          </li>
          <li><a href='#d'>servicos <i class="fa fa-arrow-down" aria-hidden="true"></i></a>
          <ul className='sub-menu'>
            <li><a href='3f'>Repografia</a></li>
            <li><a href='3f'>Biblioteca</a></li>
            <li><a href='3f'>Contabilidade</a></li>
          </ul>
          </li>
      </ul>
      </aside>
  );
}

export default Menu;
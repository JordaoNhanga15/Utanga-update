import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../Menu/style.css'
import Menu from '../../../Components/Dashboard/Menu'
import Perfil from '../../../Components/Dashboard/Perfil'
import TabControl from '../../../Components/Dashboard/TabControl'
import '../../../Components/Dashboard/style.css'
// import { Container } from './styles';

function Menu__() {
  return (
      <div className="menu__">
          <aside className="perfilll">
              <Perfil />
          </aside>
          <div className="container_mea">
          <aside className="Menu_sa">
              <Menu />
          </aside>
          <aside className="Menu_da">
              <TabControl />
          </aside>
            </div>
      </div>
  );
}

export default Menu__;
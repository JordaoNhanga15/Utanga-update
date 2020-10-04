import React,{useEffect} from 'react';
import Header from '../../Components/Portal/header'
import Noticias from '../../Components/Portal/Noticias'
import Eventos from '../../Components/Portal/Eventos'
import Contactos from '../../Components/Portal/contactos'
import Menu from '../../Components/Ui/Menu'
import Faculdade from '../../Components/Portal/Faculdades'
import '../Portal/style.css'

function Portal() {

  //const [querY,queryState]=useState([])
  useEffect(()=>{
    document.title='Utanga Portal'
  },[])
 
  return (
    <div className='Portal' id='Portalf'>
      <aside className='protal_a' id='potal_a'>
        <Header />
        <Faculdade />
        <Noticias />
        <Eventos />
        <Contactos />
        </aside>
        <aside className='protal_b' id='portal_b'>
        <Menu />
        </aside>
    </div>
  );
}

export default Portal;
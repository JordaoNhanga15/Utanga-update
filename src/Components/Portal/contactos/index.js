import React from 'react';
import '../contactos/style.css'
import 'font-awesome/css/font-awesome.min.css'
// import { Container } from './styles';

function contactos() {
  return (
      <section className='contact'>
          <div class="f_container">
            <div class="f">
            <i class="fa fa-facebook" aria-hidden="true"></i> <a href="x">Facebook</a>
            </div>
            <div class="f">
            <i class="fa fa-twitter" aria-hidden="true"></i> <a href="s">Twiter</a>
            </div>
            <div class="f">
            <i class="fa fa-linkedin" aria-hidden="true"></i><a href="s">Linkedin</a>
            </div>
            <div class="f">
            <i class="fa fa-vimeo" aria-hidden="true"></i> <a href="s">vimeo</a>
            </div>
        </div>

        <div class="t_container">
            <span><p>© 2019, Todos os Direitos Reservados - pela <a href="#s" class="wm-color-three">UTANGA</a></p></span>
        </div>
      </section>
  );
}

export default contactos;
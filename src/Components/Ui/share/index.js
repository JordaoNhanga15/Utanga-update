import React from 'react';
import '../share/style.css'
import 'font-awesome/css/font-awesome.min.css'

// import { Container } from './styles';

function share() {
  return (
      <aside className='share_container'>
          <h2>Nas Partilhas</h2>

          <div className="f_container">
            <div className="fs">
             <a href="x"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            </div>
            <div className="fs">
             <a href="s"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div className="fs">
            <a href="s"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
        </div>

      </aside>
  );
}

export default share;
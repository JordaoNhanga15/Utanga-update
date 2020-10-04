import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../Login_/style.css'
import Login from '../../Components/Portal/Login'

function Log({history}) {
  return (
      <div>
          <Login his={history} />
      </div>
  );
}

export default Log;
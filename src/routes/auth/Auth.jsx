import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Create from './create/Create';
import "./Auth.css";
import Login from './login/Login';

const Auth = () => {
  return (
    <section className='auth'>

      <span className="animation-circle">

      </span>

      <div className="auth-popup">
        <ul className='auth-popup__ul'>
          <li>
            <NavLink activeClassName='auth__link--active' className="auth__link" to="/auth/login">Kirish</NavLink>
          </li>
          <li>
            <NavLink activeClassName='auth__link--active' className="auth__link" to="/auth/create">Ro'yxatdan o'tish</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/auth/create" render={() => <Create/>} />
          <Route path="/auth/login"  render={() => <Login />} />
        </Switch>
      </div>

    </section>
  );
}

export default Auth;
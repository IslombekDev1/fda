import React from 'react';
import {BsFacebook, BsApple, } from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import "./Login.css"
import { NavLink } from 'react-router-dom';
import { auth, provider } from "../../../firebase/firebaseconfig"

const Login = () => {

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
    .then(response => console.log(response))
    .catch(err=> console.log(err))
  }

  return (
    <div className='loginWrapper'>

      <div className='registrationBox'>
      <button>
        <BsFacebook/> Facebook orqali kirish
      </button>
      <button>
        <BsApple/> Apple orqali kirish
      </button>
      <button onClick={loginWithGoogle}>
        <FcGoogle /> Google orqali kirish         
      </button>
      </div>

      <div className='or-separator'>
        <div className='left-line'></div>
        <div className='or'>YOKI</div>
        <div className='left-line'></div>
      </div>

      <form action="">

        <label htmlFor="">Telefon raqami yoki email</label>
          <input type="email"/>

        <label className='password' htmlFor="">Parol</label>
          <input type="password" />

        <button className='forgot-passwordWrapper'>
          <NavLink to="/">Parolni unutdingizmi?</NavLink>
        </button>

        <button className='btnAccess'>Kirish</button>

      </form>

    </div>
  );
}

export default Login;
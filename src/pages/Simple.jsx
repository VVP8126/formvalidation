import {FaKey, FaUser} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RE_EMAIL } from './../utils/constants.js';

const Simple = () => {
  
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [psswdChecked, setPsswdChecked] = useState(false);
  const [emailError,   setEmailError]   = useState("Email is absent !");
  const [psswdError,   setPsswdError]   = useState("Password is absent !");
  const [formValid,    setFormValid]    = useState(false);
  
  useEffect(
    () => {
      if(emailError || psswdError) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    },
    [emailError, psswdError]
  );
  
  const onBlurHandle = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailChecked(true);
        break;
      default:
        setPsswdChecked(true);
        break;
    }
  }
  
  const onChangePasswordHandle = e => {
    setPsswd(e.target.value);
    if(!e.target.value) {
      setPsswdError("Password is absent !");
    } else if(e.target.value.length <= 5) {
      setPsswdError("Too small password !");
    } else if(e.target.value.length > 9) {
      setPsswdError("Too large password !");
    } else {
      setPsswdError("");
    }
  }
  
  const onChangeEmailHandle = e => {
    setEmail(e.target.value);
    if(!RE_EMAIL.test(String(e.target.value).toLowerCase())) {
      setEmailError("Error in email !");
    } else {
      setEmailError("");
    }
  }
  
  return (
    <div className='container'>
      <h1 className='centered'>Simple example</h1>
      <Link to="/" className='link linkBtn'>BACK</Link>
      <form className="loginForm">
        <h2 className="centered loginLbl">Login</h2>
        {emailChecked && <h3 className='centered'>{emailError}</h3>}
        <div>
          <FaUser className='font20' />
          <input type="text"
                 value={ email }
                 onChange={ e => onChangeEmailHandle(e) } 
                 onBlur={ e => onBlurHandle(e) } 
                 className={!emailChecked ? "loginFormInput" : "loginFormInput redBorder"} 
                 name="email" 
                 placeholder="Enter email"/>
        </div>
        {psswdChecked && <h3 className='centered'>{psswdError}</h3>}
        <div>
          <FaKey className='font20' />
          <input type="password" 
                 value={psswd}
                 onChange={ e => onChangePasswordHandle(e) }
                 onBlur={e => onBlurHandle(e)} 
                 className={!psswdChecked ? "loginFormInput" : "loginFormInput redBorder" } 
                 name="psswd" 
                 placeholder="Enter password" />
        </div>
        <input type="submit"  disabled={ formValid }  className="loginFormBtn"   value="Enter" />
      </form>
    </div>
  );
}
export default Simple;

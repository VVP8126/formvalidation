import {FaKey, FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
// import {IS_EMPTY, MIN_LENGTH, MAX_LENGTH, IS_EMAIL} from './../utils/constants';

const Hooked = () => {
  
  const email = useInput("", { IS_EMPTY: true, IS_EMAIL:false });
  const psswd = useInput("", { IS_EMPTY: true, MIN_LENGTH: 5, MAX_LENGTH: 20 });

  return (
    <div className="container">
      <h1 className="centered">Using validation hook</h1>
      <Link to="/" className='link linkBtn'>BACK</Link>
      <form className="loginForm">
        <h2 className="centered loginLbl">Login</h2>
        <p className='validationError'>
          { (email.isDirty && email.isEmpty) && 
            <span className='centered fontRed'>Fill in your email. </span> }
          { (email.isDirty && email.isEmail) && 
            <span className='centered fontRed'>Email didn't pass validation. </span> }
        </p>
        <div>
          <FaUser  className='font20' />
          <input type="text"
                 value={email.value}
                 onChange={e => email.onChange(e)}
                 onBlur={e => email.onBlur(e)} 
                 className="loginFormInput" 
                 name="email" 
                 placeholder="Enter email"/>
        </div>
        <p className='validationError'>
           { (psswd.isDirty && psswd.isEmpty) && 
               <span className='centered fontRed'>
                 Enter password. 
               </span> }
           { (psswd.isDirty && psswd.isMinLn) && 
               <span className='centered fontRed'>
                 Password is too short. 
               </span> }
           { (psswd.isDirty && psswd.isMaxLn) && 
               <span className='centered fontRed'>
                 Password is too long. 
               </span> }
        </p>
        <div>
          <FaKey className='font20' />
          <input type="password"
                 value={psswd.value} 
                 onChange={e => psswd.onChange(e)} 
                 onBlur={e => psswd.onBlur(e)}
                 className="loginFormInput" 
                 name="psswd" 
                 placeholder="Enter password" />
        </div>
        <input type="submit" disabled={!psswd.isFrmVl || !email.isFrmVl}  className="loginFormBtn"   value="Enter" />
      </form>
    </div>
  );
}
export default Hooked;

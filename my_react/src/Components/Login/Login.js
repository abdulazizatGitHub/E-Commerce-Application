import { useContext, useEffect, useRef, useState } from 'react';
import '../../Assets/CSS/Login.css';
import logo from '../../Assets/Images/myLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { getCustomer } from '../../Services/API';
import { GoogleLogin } from "@react-oauth/google";
import { MyContext } from '../../Common/Context';

// import getCridentials from '../../Services/API';

function Login() {
  const {setAdmin} = useContext(MyContext);

  const [cridentials, setCridentials] = useState({
    email: "",
    password: ""
  });
  const [cridentialMismatch, setCridentialMismatch] = useState(false);
  
  const {email, password} = cridentials;
  const navigate = useNavigate();
  
  

  const handleChange = (e) =>
  {
    setCridentials({...cridentials, [e.target.name]: e.target.value});
    setCridentialMismatch(false);
  }
  const Ref = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getCustomer(cridentials);
      const {success, token, customerLogin, isAdmin} = result.data;
      if(success)
      {
        localStorage.setItem('token', token);
        
        if(isAdmin) {
          setAdmin(isAdmin);
          localStorage.setItem('admin', JSON.stringify(customerLogin));
          navigate('/Admin');
        } else {
          localStorage.setItem('customer', JSON.stringify(customerLogin));
          navigate("/");
        }
      }
      else{
          setCridentialMismatch(true);
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      alert("data not found");
    }
  };
  
  useEffect(() => {
    Ref.current.focus();
  }, []);


  return (
    <div className='background'>
      <form className="form_container">
        <div className="logo_container"><img className='logo' src={logo} alt='' /></div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">And enjoy the experience.</span>
        </div>
        <div className="input_container">
          <label className="input_label" for="email_field">Email</label>
          <input ref={Ref} onChange={handleChange} value={email} placeholder="name@mail.com" title="Inpit title" name="email" type="text" className="input_field" id="email_field" />
        </div>
        <div className="input_container">
          <label className="input_label" for="password_field">Password</label>
          <input onChange={handleChange} value={password} placeholder="Password" title="Inpit title" name="password" type="password" className="input_field" id="password_field" />
          {cridentialMismatch && (
            <p className="error-message">Email or Password is incorrect..</p>
          )}
        </div>
        <div className='forgot-pass'>
          <Link className='link' to={`/Login/ForgotPassword?email=${email}`}>Forgot Password?</Link>
        </div>
        <button onClick={handleSubmit} title="Sign In" type="submit" class="sign-in_btn">
          <span>Sign In</span>
        </button>
        <div className='sign-up_link'>
          Not a member?
          <Link className='link' to='/SignUp'> Signup now</Link>
        </div>
        <div className="devider">
          <hr className="line-devider" />
          <span>Or</span>
          <hr className="line-devider" />
        </div>
        <div className="sign-up_ggl">
          <GoogleLogin
            // onSuccess={handleGoogleSignup}
            theme="filled_black"
            text="signin_with"
            shape="circle"
            onError={() => {
              console.log("Login Failed");
            }}
            isSignedIn = {true}
          />
        </div>
      </form>
    </div>

  );
}
export default Login;
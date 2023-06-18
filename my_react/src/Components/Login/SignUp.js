import { Link } from "react-router-dom";
import "../../Assets/CSS/SignUp.css";
import { useState } from "react";
import { addCustomer } from "../../Services/API";

function SignUp() {
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const { firstName, lastName, email, pass, confirmPass } = customerData;

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    setPasswordMismatch(false); // Reset password mismatch state on input change
  };

  const addCustomerDetails = async (e) => {
    e.preventDefault();

    if (pass !== confirmPass) {
      setPasswordMismatch(true);
      return;
    }
    try {
      await addCustomer(customerData);
      
      setCustomerData({
        firstName: "",
        lastName: "",
        email: "",
        pass: "",
        confirmPass: "",
      });
      
      alert("Account has been created Successfully, You can Sign in  now..");

    } catch (error) {
      // Handle error (e.g., display an error message)
      console.log("Failed to add customer:", error);
    }
  };

  //Signup with Google API...
  // const handleGoogleSignup = async (cridentialResponse) =>
  // {
  //   try {
  //     const {email, password} = cridentialResponse.profileObj;

  //     const googleCustomerData = {
  //       email: email,
  //       pass: password,
  //     };

  //     await addGoogleCustomer(googleCustomerData);

  //     alert("Account has been created Successfully, You can Sign in now..");
  //   } catch (error) {
  //     console.log("Failed to add customer:", error);
  //   }
  // }

  return (
    <div className="background-pic">
      <form className="form">
        <div className="title-message">
          <p className="title">Register </p>
          <p className="message">
            Signup now and get full access to our app.{" "}
          </p>
        </div>
        <div className="Name">
          <input
            required
            name="firstName"
            placeholder="First Name"
            type="text"
            className="name-input"
            value={firstName}
            onChange={handleChange}
          />
          <input
            required
            name="lastName"
            placeholder="Last Name"
            type="text"
            className="name-input"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="details">
          <input
            required
            name="email"
            placeholder="Email"
            type="email"
            className="input"
            value={email}
            onChange={handleChange}
          />
          <input
            required
            name="pass"
            placeholder="Password"
            type="password"
            className={`input ${passwordMismatch ? "input-error" : ""}`}
            value={pass}
            onChange={handleChange}
          />
          <input
            required
            name="confirmPass"
            placeholder="Confirm Password"
            type="password"
            className={`input ${passwordMismatch ? "input-error" : ""}`}
            value={confirmPass}
            onChange={handleChange}
          />
          {passwordMismatch && (
            <p className="error-message">Password and Confirm Password do not match</p>
          )}
        </div>

        <button className="submit" onClick={addCustomerDetails}>
          Sign Up
        </button>
        <p className="signin">
          Already have an account?{" "}
          <Link to="/Login" className="signin-link">
            Sign in
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default SignUp;

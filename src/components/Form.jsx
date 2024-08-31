import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Form = () => {
  function handleChange(e) {
    if (e.target.value == "user") {
      document.querySelector(".error-msg").style = "display:block;";
    } else {
      document.querySelector(".error-msg").style = "display:none;";
    }
  }
const navigate=useNavigate()
  
  return (
    <>
      <div className="intro-container">
        <div className="intro-context">
          <h1 className="head">dribble</h1>
          <h2 className="sample-context">
            Discover the world's top Designer & creatives
          </h2>
          <div className="intro-bg">
            <img src="assets/Data extraction-rafiki.png" alt="" />
          </div>
        </div>

        <div className="form-container">
          <p className="member-signin">
            Already a member? <a href="">sign in</a>
          </p>
          <div className="form-wrapper">
            <h1>Sign up to dribble</h1>
            <p className="error-msg">Username has already been taken</p>
            <form action="" onSubmit={()=>navigate('/profile')} >
              <div className="name-container">
                <div className="name-container-1">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                  required
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="name-container-2">
                  <label htmlFor="uname">Username</label>
                  <br />
                  <input
                  required
                    type="text"
                    name="uname"
                    id="uname"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="email-container">
                <label htmlFor="email">Email</label>
                <br />
                <input required type="text" name="email" id="email" />
              </div>
              <div className="password-container">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" id="password" />
              </div>
              <div className="terms-container">
                <p>
                  <input required type="checkbox" name="" id="" />
                  Creating an account means you're okay with our{" "}
                  <a href=""> Terms of Service, Privacy policy, </a>
                  and our default
                  <a href=""> Notification Settings</a>
                </p>
              </div>
              <button
                className="submit-btn"
                type="submit"
              >
                Create Account
              </button>
              <div className="additional-info">
                <p>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Terms of Service apply.</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
    

  );
};

export default Form;

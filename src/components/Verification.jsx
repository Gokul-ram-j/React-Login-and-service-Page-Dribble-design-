import "./verification.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

const Verification = () => {

  function showmenu(){
    document.querySelector(".nav-items").classList.toggle("nav-show")
  }

  return (
    <>
      <nav>
        <div className="menu-icon">
          <button onClick={showmenu}>
            <IoMenu
              style={{ width: "35px", height: "35px", marginTop: "5px",color:"rgba(254, 18, 191, 0.941)" }}
            />
          </button>
        </div>
        <ul className="nav-items">
          <li>
            <h3 className="head verify-head">dribble</h3>
          </li>
          <li>Insipiration</li>
          <li>Find Work</li>
          <li>Learn Design</li>
          <li>Go Pro</li>
          <li>Hire Designer</li>
        </ul>
        <div className="other-opt">
          <input type="text" placeholder="Search" />
          <BsFillHandbagFill style={{ width: "40px", height: "40px" }} />
          <FaUserCircle
            style={{
              color: "rgba(254, 18, 191, 0.541)",
              width: "40px",
              height: "40px",
            }}
          />
          <button  className="submit-btn">Upload</button>
        </div>
      </nav>
      <div className="info-context">
      <MdMarkEmailRead  style={{width:"100px",height:"100px"}}/>
      <p>Please verifiy your  email address.We've sent a confirmation email to:</p>
      <h6><b>account@referro@gmail.com</b></h6>
      <p>Click the confirmation link on the email to begin using dribbble</p>
      <p>Didn't receivethe email?Check your spam folder,it may have been caught by filter.if you still don't see it,you can <a className="highlight"> resent the confirmation email</a> </p>
      <p>Wrong email address?<a className="highlight">Change it</a></p>
      </div>
    </>
  );
};

export default Verification;

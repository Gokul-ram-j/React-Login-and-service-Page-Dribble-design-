import { useState } from "react";
import "./service.css";
import { Link } from "react-router-dom";

const Service = () => {
  let [valid, setValid] = useState(false);
  let Option = (props) => {
    function changeHandle(e) {
      let elements = document.querySelectorAll(".opt");
      for (let elem of elements) {
        if (e.target.parentElement == elem) {
          elem.querySelector(".additional-opt-info").style =
            "display:block;position: relative;top: -25%;";
          elem.querySelector("img").style = "position: relative;top: -25%;";
          elem.querySelector("h6").style = "position: relative;top: -25%;";
          elem.querySelector("input").style = "position: relative;top: -10%;";
          elem.style="border: 3px solid rgb(249, 56, 88);"
        } else {
          elem.querySelector(".additional-opt-info").style =
          "display:none;position: relative;top: 0%;";
          elem.querySelector("img").style = "position: relative;top: 0%;";
          elem.querySelector("h6").style = "position: relative;top: 0%;";
          elem.querySelector("input").style = "position: relative;top: 0%;";
          elem.style="border: 1px solid rgba(16, 16, 16, 0.344);"
        }
      }
      setValid(true)
    }

    return (
      <>
        <label className="label" htmlFor={props.no}>
          <div className="opt">
            <img src={props.src} alt="" />
            <h6 className="opt-info">{props.info}</h6>
            <p className="additional-opt-info">{props.additional_info}</p>
            <input
              className="indicator"
              type="radio"
              name="opt"
              id={props.no}
              onChange={changeHandle}
            />
          </div>
        </label>
      </>
    );
  };
  return (
    <>
      <h1 className="head profile-head">dribble</h1>
      <h2 className="service-head">What brings you to Dribble?</h2>
      <p className="service-context">
        Select the option that best describes you.Don't worry you can explore
        other options later
      </p>

      <div className="option-container">
        <Option
          no="1"
          info="I'm a designer looking to share my work"
          src="assets/Devices-rafiki.png"
          additional_info="With over 7 million shots from a vast community of designers.Dribble is the leading source for design inpiration"
        ></Option>
        <Option
          no="2"
          info="I'm looking to hire a designer"
          src="assets/Work in progress-cuate.png"
          additional_info="With over 7 million shots from a vast community of designers.Dribble is the leading source for design inpiration"
        ></Option>
        <Option
          no="3"
          info="I'm looking for a design inspiration"
          src="assets/Working-pana.png"
          additional_info="With over 7 million shots from a vast community of designers.Dribble is the leading source for design inpiration"
        ></Option>
      </div>
      <h5 className="service-footer">Anything else? you can select multiple</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px auto",
        }}
      >
        <Link to="/verification">
        
        <button
          disabled={!valid}
          style={
            valid
              ? { background: "rgba(254, 18, 191, 0.941)" }
              : { background: "rgba(254, 18, 191, 0.341)" }
          }
          className=" service-submit-btn"
          type="submit"
        >
          Finish
        </button>
        </Link>
      </div>
      <p className="service-additional-info" style={valid?{display:"block"}:{display:"none"}}>Or press RETURN</p>
    </>
  );
};

export default Service;

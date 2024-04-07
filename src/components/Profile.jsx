import { useState } from "react";
import "./profile.css";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
  const [file, setFile] = useState("");
  const [profileUploaded, setProfileStatus] = useState(false);
  const [locationUploaded, setLocationStatus] = useState(false);
  const [proceed, setProceed] = useState("Next");

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    let profile_img = URL.createObjectURL(e.target.files[0]);
    if (URL.createObjectURL(e.target.files[0]) == "") {
      document.querySelector(".profile-img").style = "border: 2px dashed grey;";
      setProfileStatus(false);
    } else {
      document.querySelector(".profile-img").style = "border: 0px;";
      setProfileStatus(true);
    }
  }
  function handleLocation(e) {
    if (e.target.value == "") {
      setLocationStatus(false);
    } else {
      setLocationStatus(true);
    }
  }

  return (
    <>
      <h1 className="head profile-head">dribble</h1>
      <div className="container">
        <div className="form">
          <h1 className="header">Welcome! Let's create a profile</h1>
          <p>Lets other get to know you better! You can do this later</p>
          <p className="avatar-context">Add a avatar</p>
          <div className="avatar-container">
            <div className="profile-img">
              <img className="profile-image" src={file} alt="" />
            </div>
            <div className="profile-controls">
              <label htmlFor="file-upload" className="custom-file-upload">
                Choose image
              </label>
              <input id="file-upload" type="file" onChange={handleChange} />

              <button className="default-btn">
                <p>&gt;Or choose one of our defaults</p>
              </button>
            </div>
          </div>
          <div className="location-container">
            <h4 className="location-context">Add your location</h4>
            <input
              className="location-inp"
              type="text"
              name=""
              id=""
              placeholder="Enter a location"
              onChange={handleLocation}
            />
          </div>
          {/* <button  className="submit-btn profile-submit-btn" disabled={!(profileUploaded && locationUploaded)} style={!(profileUploaded && locationUploaded)?{background:'rgba(254, 18, 191, 0.241)'}:{background:'rgba(254, 18, 191, 0.941)'}} type="submit">
          {(profileUploaded && locationUploaded)?<Link style={{"textDecoration":"none","color":"white"}} to='/verification'>Next</Link>:"Next"} 
          </button> */}
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/verification"
          >
            <button
              className="submit-btn profile-submit-btn"
              disabled={!(profileUploaded && locationUploaded)}
              style={
                !(profileUploaded && locationUploaded)
                  ? { background: "rgba(254, 18, 191, 0.241)" }
                  : { background: "rgba(254, 18, 191, 0.941)" }
              }
              type="submit"
            >
              Next
            </button>
          </Link>
          <p
            className="additional-info-next-btn"
            style={
              profileUploaded && locationUploaded
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Or Press RETURN
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;

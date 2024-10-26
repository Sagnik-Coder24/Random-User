import React, { useState } from "react";
import Age from "../assets/Age.jpeg";
import Email from "../assets/Email.jpeg";
import House from "../assets/House.jpeg";
import Login from "../assets/Login.jpeg";
import Phone from "../assets/Phone.jpeg";

const Indiv = ({
  name,
  street,
  city,
  state,
  country,
  postcode,
  email,
  username,
  password,
  dob,
  age,
  phone,
  pic,
}) => {
  const [display, setDisplay] = useState(
    <>
      <p className="details">Hover the above buttons</p>
      <p>...</p>
    </>
  );

  const addressHover = () => {
    setDisplay(
      <div className="outer-part">
        <img src={House} alt="Address" className="logos" />
        <div className="inner-part">
          <div>
            <h2>My Address is</h2>
            <p className="details">
              {street}, {postcode}
              <br />
              {city}, {state}, <strong>{country}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const emailHover = () => {
    setDisplay(
      <div className="outer-part">
        <img src={Email} alt="Email" className="logos" />
        <div className="inner-part">
          <div>
            <h2>My Email Address is</h2>
            <p className="details">{email}</p>
          </div>
        </div>
      </div>
    );
  };

  const loginHover = () => {
    setDisplay(
      <div className="outer-part">
        <img src={Login} alt="login" className="logos" />
        <div className="inner-part">
          <div>
            <h2>My Login Credentials are</h2>
            <p className="details">
              <strong>Username:</strong> {username} <br />
              <strong>Password:</strong> {password}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ageHover = () => {
    setDisplay(
      <div className="outer-part">
        <img src={Age} alt="age" className="logos" />
        <div className="inner-part">
          <div>
            <h2>My Date of Birth and Age are</h2>
            <p className="details">
              <strong>DOB:</strong> {dob.split("T")[0]} <br />
              <strong>Age:</strong> {age}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const phoneHover = () => {
    setDisplay(
      <div className="outer-part">
        <img src={Phone} alt="phone" className="logos" />
        <div className="inner-part">
          <div>
            <h2>My Phone number is</h2>
            <p className="details">
              <strong>Phone:</strong> {phone}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="indiv-container">
        <img src={pic} alt={`${name}'s profile`} className="profile-pic" />
        <h2 className="name">{name}</h2>
        <div className="buttons">
          <button className="button2" onMouseEnter={addressHover}>
            Address
          </button>
          <button className="button2" onMouseEnter={emailHover}>
            Email
          </button>
          <button className="button2" onMouseEnter={loginHover}>
            Login
          </button>
          <button className="button2" onMouseEnter={ageHover}>
            Age
          </button>
          <button className="button2" onMouseEnter={phoneHover}>
            Phone
          </button>
        </div>
      </div>
      <div className="indiv-container">{display}</div>
    </div>
  );
};

export default Indiv;

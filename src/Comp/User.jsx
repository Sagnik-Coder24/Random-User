import React, { useEffect, useState } from "react";
import axios from "axios";
import Indiv from "./Indiv";
import DP from "../assets/DP.jpeg";

const API = "https://randomuser.me/api";

const User = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [indiv, setIndiv] = useState();

  useEffect(() => {
    setIndiv(
      <div className="indiv-container">
        <img src={DP} alt="DP" className="logos-main" />
        <h2 className="name">Welcome to Random User search</h2>
        <h2>Please click the below button to proceed...</h2>
      </div>
    );
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API);
      if (response.data.info.results < 1) {
        setErr("There are no unsers fetched.");
      } else {
        setIndiv(
          response.data.results.map((item, i) => (
            <Indiv
              key={i}
              name={`${item.name.title} ${item.name.first} ${
                item.name.middle ? item.name.middle + " " : ""
              }${item.name.last}`}
              gender={item.gender}
              street={`${item.location.street.number} ${item.location.street.name}`}
              city={item.location.city}
              state={item.location.state}
              country={item.location.country}
              postcode={item.location.postcode}
              email={item.email}
              username={item.login.username}
              password={item.login.password}
              dob={item.dob.date}
              age={item.dob.age}
              phone={item.phone}
              pic={item.picture.large}
            />
          ))
        );
      }
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      {loading && <div className="loader"></div>}
      {err && !loading && <p>Error: {err}</p>}
      {!loading && !err && <>{indiv}</>}
      {!loading && (
        <button className="button" onClick={fetchData}>
          Search Random User
        </button>
      )}
    </div>
  );
};

export default User;

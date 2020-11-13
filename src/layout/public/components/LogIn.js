import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { logIn, setToken, setId } from "../../../services/auth_service";
import "../../../utils/style.css";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handleClick = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Fill out all fields");
      return;
    } else {
      logIn(username, password).then((res) => {
        setToken(res.data.token);
        setId(res.data.user.user_id);
        history.push("/main");
        setError("");
        window.location.reload();
      });
    }
  };

  return (
    <div className="form">
      <p className="p">Login to see content:</p>
      <label className="label">Username:</label>
      <br />
      <input
        className="input"
        type="text"
        onInput={(e) => {
          e.preventDefault();
          setUsername(e.target.value);
        }}
      />
      <br />
      <label className="label">Password:</label>
      <br />
      <input
        className="input"
        type="password"
        onInput={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />
      <br />
      <p>{`${error}`}</p>
      <button onClick={handleClick} className="button">
        LogIn
      </button>
      <br />
      <p className="p">Don't have acoount?</p>
      <Link to="register" className="button">
        SignUp
      </Link>
    </div>
  );
};

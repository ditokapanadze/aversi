import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory, history } from "react-router-dom";
import e from "express";

function Login() {
  const [hide, setHide] = useState(true);
  const [newUser, setNewUser] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

  const hideShow = () => {
    setHide(!hide);
  };

  const signUp = () => {
    setNewUser(!newUser);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("paswords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login__container">
      {!newUser ? (
        <form onSubmit={loginHandler} className="login__form">
          <input className="mail__input" placeholder="ელ-ფოსტა" type="mail" />
          <div>
            <input
              className="password__input"
              placeholder="პასვორდი"
              type={hide ? "password" : "text"}
            />
            {hide ? (
              <i onClick={hideShow} class="far fa-eye"></i>
            ) : (
              <i onClick={hideShow} class="fas fa-eye-slash"></i>
            )}
          </div>
          <button type="submit">შესვლა</button>
          <p>
            {" "}
            არ გაქავთ საკუთარი ექაუნთი?{" "}
            <span onClick={signUp}>დარეგისტრიდი</span>{" "}
          </p>
        </form>
      ) : (
        <form onSubmit={registerHandler} className="signup__form">
          <span>
            <input type="mail" placeholder="ელ-ფოსტა" />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input type="password" placeholder="პაროლი" />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input type="password" placeholder="გაიემორეთ პაროლი" />
            <i class="fas fa-asterisk"></i>
          </span>
          <input placeholder="მობილურის ნომერი" type="text" />
          <input placeholder="მისამართი" type="text" />
          <button type="submit">რეგისტრაცია</button>
          <p>უკვე გაქვ ექაუნთი?</p>
          <p>
            <i class="fas fa-asterisk"></i> სავალდებულო ველი
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;

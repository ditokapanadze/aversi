import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory, history } from "react-router-dom";

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

  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);

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
  let test = "sd";
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(password);
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
    console.log("tet");
    try {
      const { data } = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login__container">
      {!newUser ? (
        <form className="login__form">
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
            <input
              type="mail"
              placeholder="ელ-ფოსტა"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input
              placeholder="მომხმარებლის სახელი"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input
              type="password"
              placeholder="პაროლი"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input
              type="password"
              placeholder="გაიემორეთ პაროლი"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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

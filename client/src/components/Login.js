import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory, history } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../actions/auth";

function Login() {
  const [hide, setHide] = useState(true);
  const [newUser, setNewUser] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const hideShow = () => {
    setHide(!hide);
  };

  const signUp = () => {
    setNewUser(!newUser);
  };

  const form = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(form);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(login(formData, history));
  };
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);

  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const { data } = await axios.post(
  //       "/api/auth/login",
  //       {
  //         email,
  //         password,
  //       },
  //       config
  //     );
  //     localStorage.setItem("authToken", data.token);
  //     history.push("/");
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };
  // let test = "sd";
  // const registerHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(username);
  //   console.log(password);
  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   if (password !== confirmPassword) {
  //     setPassword("");
  //     setConfirmPassword("");
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //     return setError("paswords do not match");
  //   }
  //   console.log("tet");
  //   try {
  //     const { data } = await axios.post("/api/auth/register", {
  //       formData,
  //     });
  //     console.log(data);
  //     localStorage.setItem("authToken", data.token);
  //     history.push("/");
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };

  return (
    <div className="login__container">
      {!newUser ? (
        <form onSubmit={loginHandler} className="login__form">
          <input
            className="mail__input"
            placeholder="ელ-ფოსტა"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="email"
              type="email"
              value={formData.email}
              placeholder="ელ-ფოსტა"
              onChange={handleChange}
            />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input
              name="userName"
              placeholder="მომხმარებლის სახელი"
              type="text"
              value={formData.userName}
              onChange={handleChange}
            />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input
              name="password"
              type="password"
              placeholder="პაროლი"
              value={formData.password}
              onChange={handleChange}
            />
            <i class="fas fa-asterisk"></i>
          </span>
          <span>
            <input
              name="confirmPassword"
              type="password"
              placeholder="გაიემორეთ პაროლი"
              value={formData.confirmPassword}
              onChange={handleChange}
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

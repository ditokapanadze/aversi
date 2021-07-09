import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [hide, setHide] = useState(true);
  const [newUser, setNewUser] = useState(false);

  const hideShow = () => {
    setHide(!hide);
  };

  const signUp = () => {
    setNewUser(!newUser);
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
          <p>
            {" "}
            არ გაქავთ საკუთარი ექაუნთი?{" "}
            <span onClick={signUp}>დარეგისტრიდი</span>{" "}
          </p>
        </form>
      ) : (
        <form className="signup__form">
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
          <p>
            <i class="fas fa-asterisk"></i> სავალდებულო ველი
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;

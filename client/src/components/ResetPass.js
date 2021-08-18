import React, { useState } from "react";
import "./ResetPass.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function ResetPass() {
  const [pass, setPass] = useState("");
  const [rePass, setrePass] = useState("");
  const [message, setMessage] = useState("");

  let { token } = useParams();
  console.log(token);

  const resetPass = (e) => {
    if (pass !== rePass) {
      setMessage("პაროლები არ ემთხვევა");
    } else {
      setMessage("");
    }
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = axios.put(
        `http://localhost:5001/api/auth/resetpassword/${token}`,
        { pass },
        config
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form type="submit" onSubmit={resetPass} className="reset__form">
      <input
        placeholder="შეიყვანეთ ახალი პაროლი"
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <input
        value={rePass}
        placeholder="გიმეორეთ პაროლი"
        type="password"
        onChange={(e) => setrePass(e.target.value)}
      />
      <p>{message}</p>
      <button type="submit">პაროლის შეცვლა</button>
    </form>
  );
}

export default ResetPass;

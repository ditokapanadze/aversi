// import { Route, Redirect } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

// function PrivateRoute({ component: Component, ...rest }) {
//   const checkAuth = () => {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       return false;
//     }

//     return true;
//   };
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         checkAuth() ? <Component {...props} /> : <Redirect to="/Login" />;
//       }}
//     />
//   );
// }
// export default PrivateRoute;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return false;
    }
    try {
      const { exp } = decode(token);
      console.log(exp);
      console.log(new Date().getTime());
      if (exp * 1000 < new Date().getTime()) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

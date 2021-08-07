// import { Route, Redirect } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";

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
    return true;
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

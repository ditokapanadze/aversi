const initialState = {
  token: localStorage.getItem("authToken") || null,
  isAuthenticated: null,
  isLoading: false,
  user: null,
  message: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, token: null };
    case "AUTH":
      console.log(action.data);
      localStorage.setItem("authToken", action.data.token);
      return {
        ...state,
        user: action.data,
        token: localStorage.getItem("authToken"),
      };
    case "AUTH_ERR":
      console.log("test");
      console.log(action.message);
      return { ...state, message: action.message };
    case "GET_USER":
      console.log(action.user);
      return { ...state, user: action.data.user };
    case "NEW_BASKET":
      console.log(action);
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default authReducers;

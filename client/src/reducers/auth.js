const initialState = {
  token: localStorage.getItem("authToken"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
    case "AUTH":
      console.log(action.data);
      localStorage.setItem("authToken", action.data.token);
      return { ...state, authData: action.data };
    default:
      return state;
  }
};

export default authReducers;

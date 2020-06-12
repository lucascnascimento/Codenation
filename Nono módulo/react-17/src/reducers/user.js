import UserConstants from "../constants/user";

const userInitialState = {
  email: "lucascordeiron@gmail.com",
  erroMessage: "",
  name: "Lucas Cordeiro",
  status: "sucess",
  thumb: "",
};

const userReducer = (state = userInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserConstants.GET_USER_REQUEST:
      return {
        ...state,
        status: "running",
      };
    case UserConstants.GET_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        status: "success",
      };
    case UserConstants.GET_USER_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        status: "error",
      };
    default:
      return state;
  }
};

export default userReducer;

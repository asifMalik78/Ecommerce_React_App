import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/userReducer";
import { successNotification, errorNotification } from "../styles/ToastNotify";

export const userContext = createContext();

const initialState = {
  isLoading: false,
  isUserError: false,
  user: JSON.parse(localStorage.getItem("User")),
};
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // login user
  const loginUser = async (URL, userData) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const res = await axios.post(URL, userData);
      localStorage.setItem("User", JSON.stringify(res.data.user));
      dispatch({ type: "SET_USER", payload: res.data.user });
    } catch (error) {
      dispatch({ type: "IS_ERROR" });
    }
  };

  // update profile
  const updateProfile = async (file, userData) => {
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("fileName", fileName);
      data.append("file", file);
    
      userData.img = `${import.meta.env.VITE_BASE_URL}/images/${fileName}`;
 
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/upload/image`,
          data
        );

        successNotification(res.data.message);
      } catch (error) {
        errorNotification(error.message);
      }
    }

    try {
     
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/user/${state.user._id}`,
        userData,
        {
          headers: {
            token: `Bearer ${state.user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      successNotification(res.data.message);
      res.data.user.token = state.user.token;
      localStorage.setItem("User", JSON.stringify(res.data.user));
      dispatch({ type: "UPDATE_PROFILE", payload: res.data.user });
    } catch (error) {
      errorNotification(error.message);
    }
  };

  const logoutUser = () => {
    dispatch({ type: "LOG_OUT_USER" });
  };
  return (
    <userContext.Provider
      value={{ ...state, loginUser, logoutUser, updateProfile }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};

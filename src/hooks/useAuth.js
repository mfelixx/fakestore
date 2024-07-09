import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "../redux/slice/authSlice";
import { clearCart } from "../redux/slice/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const { data } = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      dispatch(setLogin(data));
      return data;
    } catch (error) {
      const errorMsg = error.response.data;
      return errorMsg;
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (
    email,
    password,
    confirmPassword,
    firstname,
    lastname
  ) => {
    setLoading(true);
    try {
      const username = [firstname, lastname].join(" ");
      if (password === confirmPassword) {
        const { data } = await axios.post("https://fakestoreapi.com/users", {
          email,
          username,
          password,
        });
        dispatch(setLogin(data));
        toast.success("Register Success");
        navigate("/");
        return data;
      } else {
        throw new Error("Password not match");
      }
    } catch (error) {
      const errorMsg = error.message || error.response?.data;
      toast.error(errorMsg);
      return errorMsg;
    } finally {
      setLoading(false);
    }
  };
  return { loading, register };
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    try {
      dispatch(setLogout());
      dispatch(clearCart());
      return true;
    } catch (error) {
      return false;
    }
  };
  return { logout };
};

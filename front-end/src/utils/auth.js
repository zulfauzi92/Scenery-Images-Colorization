import Cookies from "js-cookie";

export const setUserLogin = (user) => {
  Cookies.set("USER", user);
};
export const login = (user) => {
  Cookies.set("USER", user);
};

export const logout = () => {
  Cookies.remove("USER");
};

export const isLogin = () => {
  if (Cookies.get("USER")) {
    return true;
  }
  return false;
};

export const isUser = () => {
  if (Cookies.getJSON("USER")?.role === "user") {
    return true;
  }
  return false;
};
export const isOwner = () => {
  if (Cookies.getJSON("USER")?.role === "owner") {
    return true;
  }
  return false;
};
import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/UI/Loading";
import RouteMap from "src/utils/route-map";

export const AuthContext = React.createContext({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

const AuthContextProvider = (props: Props) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean | undefined>();
  const handleLogin = () => {
    setIsLogin(true);
    navigate(RouteMap.HOME);
  };
  const handleLogout = () => {
    setIsLogin(false);
    navigate(RouteMap.HOME);
  };

  useEffect(() => {
    const prevLogin = localStorage.getItem("isLogin") === "true";
    setIsLogin(prevLogin);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLogin", `${isLogin}`);
  }, [isLogin]);

  if (isLogin === undefined) return <Loading />;
  return (
    <AuthContext.Provider
      value={{ isLogin, login: handleLogin, logout: handleLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

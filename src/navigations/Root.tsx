import React, { useState } from "react";
import { AuthContext } from "../contexts/authContext";
import AuthenticationStack from "./AuthenticationStack";
import MainDrawer from "./MainDrawer";

const Root = () => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {!auth ? <AuthenticationStack /> : <MainDrawer />}
    </AuthContext.Provider>
  );
};

export default Root;

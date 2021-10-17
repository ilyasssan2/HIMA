import { createContext } from "react";

export const AuthContext = createContext<{ auth: any; setAuth: Function }>({
  auth: undefined,
  setAuth: (value: any) => {},
});

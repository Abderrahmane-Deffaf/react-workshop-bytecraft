import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
export const userContext = createContext();

const AuthContext = () => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Outlet />
    </userContext.Provider>
  );
};

export default AuthContext;

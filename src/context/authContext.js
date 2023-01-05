import { createContext, useEffect, useState } from "react";
import dp from "../assets/display-picture.jpg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Ashutosh K.",
      profilePic: dp,
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>;
};

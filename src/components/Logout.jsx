import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logoutWithGoogle = () => {
    //googleでログアウト
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logoutWithGoogle}>Googleでログアウト</button>
    </div>
  );
};

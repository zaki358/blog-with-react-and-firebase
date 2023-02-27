import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { CreatePost } from "./components/CreatePost";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Navbar } from "./components/Navbar";

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}  />}></Route>
      </Routes>
    </>
  );
}

export default App;

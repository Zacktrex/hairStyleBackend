import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/home";
import "./App.css";
import Login from "./main/login";
import SignUp from "./main/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

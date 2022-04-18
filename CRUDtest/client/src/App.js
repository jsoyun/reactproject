import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SignPage";

import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign" element={<SignPage />}></Route>
        <Route path="/board" element={<BoardPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;

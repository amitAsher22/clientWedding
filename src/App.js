import "./App.css";
import { Routes, Route } from "react-router-dom";

/// All components
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

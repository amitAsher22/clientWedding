import "./App.css";
import { Route, Routes } from "react-router-dom";

/// All components
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import EventsPhotography from "./pages/EventsPhotography";
import WeddingDresses from "./pages/WeddingDresses";
import Eventhalls from "./pages/Eventhalls";
import Gardens from "./pages/Gardens";
import Dj from "./pages/Dj";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/EventsPhoto" element={<EventsPhotography />} />
          <Route path="/dresses" element={<WeddingDresses />} />
          <Route path="/halls" element={<Eventhalls />} />
          <Route path="/Gardens" element={<Gardens />} />
          <Route path="/Dj" element={<Dj />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

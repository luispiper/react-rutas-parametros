import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";
import Message from "./pages/Message";

function App() {
  const mensaje = "Bienvenido a mi actividad, este mensaje viene con props desde App.jsx";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/message" element={<Message mensaje={mensaje} />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";
import Message from "./pages/Message";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetail />} />
        {/* 🔹 Aquí va el mensaje con el prop */}
        <Route
          path="/mensaje"
          element={<Message mensaje="Bienvenido a mi actividad, información de usuario enviada como props desde componente principal" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
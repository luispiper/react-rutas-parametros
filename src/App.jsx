import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";
import Message from "./pages/Message";

function App() {
  const mensaje = "Hola, este mensaje viene como props desde App.jsx";

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<UserDetail />} />
          <Route path="/mensaje" element={<Message mensaje={mensaje} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
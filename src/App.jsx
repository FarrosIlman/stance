import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Linktree from "./pages/Linktree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linktree" element={<Linktree />} />
      </Routes>
    </Router>
  );
}

export default App;
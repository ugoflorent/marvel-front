import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import ComicsCard from "./pages/ComicsCard";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comicscard" element={<ComicsCard />} />
      </Routes>
    </Router>
  );
}

export default App;

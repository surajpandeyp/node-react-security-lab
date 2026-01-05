import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Admin from "./component/Admin";
import Upload from "./component/Uploads";





function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/uploads" element={<Upload />} />
       
      </Routes>
    </Router>
  );
}

export default App

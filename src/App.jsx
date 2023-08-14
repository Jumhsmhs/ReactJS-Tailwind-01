import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
          <Route
            element={
              <>
                <Navbar />
                <div className="bg-indigo-600 w-full h-screen"></div>
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Navbar />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

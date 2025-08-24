import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantList from "./components/PlantList";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <Router>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">
             Plant Catalog
          </Link>
           
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!isAdmin ? (
                <li className="nav-item">
                  <Link className="btn btn-light" to="/admin">
                    Admin
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            isAdmin ? <Admin /> : <AdminLogin onLogin={() => setIsAdmin(true)} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Index as Home } from "./pages/home/Index";
import { Index as Login } from "./pages/login/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path="/" exact />
        </Route>

        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { Index as Home } from "./pages/home/Index";
import { Index as Login } from "./pages/login/Index";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path="/" exact />
        </Route>
      </Route>

      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Home />} path="/" exact />
      </Route>
    </Routes>
  );
}

export default App;

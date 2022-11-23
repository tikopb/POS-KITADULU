import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Index as Home } from "./pages/home/Index";
import { Index as Login } from "./pages/login/Index";
import PersistLogin from "./components/PersistLogin";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<ProtectedRoute />}>
            <Route element={<Home />} path="/" exact />
            <Route path="userslist" element={<PersistLogin />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

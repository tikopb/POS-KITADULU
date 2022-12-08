import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PersistLogin from "./components/PersistLogin";
import Layout from "./components/Layout";
import LoaderIndicator from "./components/LoaderIndicator";
const HomePage = React.lazy(() => import("./pages/home/Index"));
const LoginPage = React.lazy(() => import("./pages/login/Index"));
const ProductCategoryPage = React.lazy(() =>
  import("./pages/productCategory/Index"),
);

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}>
        <Route element={<PersistLogin />}>
          {/* public routes */}
          <Route
            path='/login'
            element={
              <React.Suspense fallback={<LoaderIndicator />}>
                <LoginPage />
              </React.Suspense>
            }
          />

          <Route element={<ProtectedRoute />}>
            <Route
              path='/'
              element={
                <React.Suspense fallback={<p>Please wait</p>}>
                  <HomePage />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path='/product-category'
            element={
              <React.Suspense fallback={<p>Please wait</p>}>
                <ProductCategoryPage />
              </React.Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

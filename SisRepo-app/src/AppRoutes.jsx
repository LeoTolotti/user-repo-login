import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthContext, AuthProvider } from "./contexts/auth";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div className="loading">Carregando...</div>;
    }
    if (!authenticated) {
      <Navigate to={"/login"} />;
    }
    return children;
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <MainPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

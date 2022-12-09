import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "./components/loader/Loader";
import RequireAuthRoutes from "./app/app-routes";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState();
  const isAuth = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  if (loading) return <Loader />;
  return isAuth ? (
    <RequireAuthRoutes />
  ) : (
    <Routes>
      <Route path="/login" element={<div />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

import HomePage from "./pages/HomePage";
import ElectionPage from "./pages/ElectionPage";
import ManagePage from "./pages/ManagePage";
import ResultPage from "./pages/ResultPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminRoute from "./routes/AdminRoute";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/ProtectedRoute";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Header />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />


        {/* 🔐 USER + ADMIN */}
        <Route
          path="/election"
          element={
            <ProtectedRoute>
              <ElectionPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <AdminRoute>
            <ResultPage />
          </AdminRoute>
          }
        />

        {/* 🔥 ADMIN ONLY */}
        <Route
          path="/manage"
          element={
            <AdminRoute>
              <ManagePage />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

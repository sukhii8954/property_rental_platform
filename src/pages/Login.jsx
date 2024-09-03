import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userAuth } from "../Contexts/AuthContext";

const Login = () => {
  const { login } = userAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (loginkey) => {
    loginkey.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("users")) || [];

    const user = registeredUser.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      login(user);
      navigate( location.state?.from || "/");
    } 
    else {
      alert(
        "login failed : Invalid Email or Passoword :/ Jayda chalaki nai :)"
      );
    }
  };

  const handleForgotPassword = (el) => {
    e.preventDefault();
    alert(`An OTP has been sent to ${forgotEmail}`);
  };

  const handleResetPassword = (el2) => {
    e.preventDefault();

    alert("Password has been reset successfully");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        {!forgotPassword ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  autoComplete="username/Email-id"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  autoComplete="current password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              >
                Login
              </button>
              <p
                onClick={() => setForgotPassword(true)}
                className="text-blue-400 cursor-pointer text-center mt-4"
              >
                Forgot password ?
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
            <form onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              >
                Send OTP
              </button>
            </form>
            <form onSubmit={handleResetPassword} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              >
                Reset Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

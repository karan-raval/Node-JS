import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const ForgotPass = () => {
  const [formData, setFormData] = useState({ email: "", otp: "", newpassword: "" });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5532/user/forgotPassword", { email: formData.email });
      toast.success(response.data.msg);
      setStep(2);
    } catch (error) {
      console.error("Email Submit Error:", error.response || error);
      toast.error(error.response?.data?.message || "Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5532/user/resetPassword", {
        email: formData.email,
        otp: formData.otp,
        newpassword: formData.newpassword,
      });
      toast.success(response.data.message);
      navigate("/login"); 
    } catch (error) {
      console.error("Reset Submit Error:", error.response || error);
      setErrorMessage(error.response?.data?.message || "Error resetting password. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="reset-password-container">
        <div className="reset-password-box">
          <h2>Reset Password</h2>
          {step === 1 ? (
            <form onSubmit={handleEmailSubmit} className="reset-password-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your registered email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          ) : (
            <form onSubmit={handleResetSubmit} className="reset-password-form">
              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter the OTP sent to your email"
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newpassword">New Password</label>
                <input
                  id="newpassword"
                  type="password"
                  placeholder="Enter your new password"
                  value={formData.newpassword}
                  onChange={(e) => setFormData({ ...formData, newpassword: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPass;

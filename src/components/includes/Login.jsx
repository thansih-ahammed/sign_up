import React, { useState, useContext } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../App"; // Import the UserContext

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    axios
      .post("https://traveller.talrop.works/api/v1/auth/token/", {
        username: email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        let data = response.data;
        localStorage.setItem("user_data", JSON.stringify(data));
        updateUserData({ type: "LOGIN", payload: data });
        navigate("/main"); // Navigate to the register page
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.status === 401) {
          setMessage(error.response.data.detail);
        } else {
          if (error.response.data.username === "username") {
            setMessage("email:field is required");
          } else {
            setMessage("email & password field is required");
          }
        }
      });
  };

  return (
    <section className="h-screen px-4 items-center bg-gradient-to-br from-blue-500 to-green-500 flex flex-wrap justify-around">
      {/* Login Container */}
      <div className="w-full sm:max-w-lg p-5">
        <h2 className="text-2xl text-white font-bold mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              value={email}
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              value={password}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border py-2 px-4 rounded-md hover:bg-green-400"
          >
            Log In
          </button>
        </form>
        <p className="text-white mt-4">
          Don't have an account? <Link to="/auth/create/">Sign up</Link>
          {message && (
            <small className="text-sm text-red-600 mb-[25px] items-center">
              {message}
            </small>
          )}
        </p>
      </div>
    </section>
  );
}


import "./App.css";
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/asetss/SignUvdgfp";
import NoMatch from "./components/includes/NoMatch";
import Login from "./components/includes/Login";
import Register from "./components/includes/Register";
import PreLoader from "./components/includes/PreLoader/PreLoader";

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setUserData(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user_data")));
    setLoading(false);
  }, []);
  return loading ? (
    <PreLoader />
  ) : (
    <>
      <UserContext.Provider value={{ userData, updateUserData }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to="auth/login/" element={<Login />} />
              }
            />
            <Route exact path="auth/create" element={<SignUp />} />
            <Route exact path="auth/login" element={<Login />} />
            <Route exact path="/main" element={<Register />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>

  );
}

export default App;

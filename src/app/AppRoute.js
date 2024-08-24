"use client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Books from "./Main Components/Books";
import Home from "./Main Components/Home";
import Signup from "./Components/Signup";
import Contact from "./Main Components/Contact";
import { useAuth } from "./Context/AuthProvider";

export default function AppRoutes() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={authUser ? <Books /> : <Navigate to={"/signup"} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

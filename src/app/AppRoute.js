"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./Main Components/Books";
import Home from "./Main Components/Home";
import Signup from "./Components/Signup";
import Contact from "./Main Components/Contact";

export default function AppRoutes() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

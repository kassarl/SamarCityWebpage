import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from './components/Navigation';

import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="app">     
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

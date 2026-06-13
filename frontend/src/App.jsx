import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      className={
        darkMode
          ? "dark-theme"
          : "light-theme"
      }
    >

      <BrowserRouter>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
              />
            }
          />
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
import { useState } from "react";
import api from "../api/axios";
import "../Auth.css";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/api/auth/register",
        form
      );

      alert("Registration Successful");

      setForm({
        name: "",
        email: "",
        password: ""
      });

    } catch (err) {

      console.error(err);

      alert(
        err?.response?.data?.detail ||
        "Registration Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>

  );
}

export default Register;
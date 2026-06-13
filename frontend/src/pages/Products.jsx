import { useState } from "react";
import api from "../api/axios";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="container">

      <h1 className="page-title">
        Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-grid">

        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/auth/register", {
        email,
        password
      });

      alert("Registration Successful");

    } catch (err) {

      alert("Registration Failed");
    }
  };

  return (

    <div className="max-w-md mx-auto mt-10">

      <h2 className="text-2xl mb-5 font-bold">
        Register
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="bg-green-600 text-white w-full p-2"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;

import { useEffect, useState } from "react";
import api from "../api/axios";

function Cart() {

  const [cart,setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {

    try {

      const response =
        await api.get("/api/cart");

      setCart(response.data);

    } catch(err) {

      console.log(err);
    }
  };

  return (
    <div>

      <h2>Cart</h2>

      {
        cart.map((item)=>(
          <div key={item.id}>
            {item.product_id}
            {" "}
            Qty:
            {item.quantity}
          </div>
        ))
      }

    </div>
  );
}

export default Cart;
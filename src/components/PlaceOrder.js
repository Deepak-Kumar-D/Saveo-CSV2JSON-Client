import axios from "axios";
import React from "react";
import { useContext } from "react";
import { CartOrder } from "../App";
import "../css/PlaceOrder.css";

const PlaceOrder = () => {
  const { list, setList } = useContext(CartOrder);

  const cart = { order: list };

  const orderMeds = async () => {
    const obj = await axios.post("http://localhost:5000/placeorder", cart);

    if (obj.status === 200) {
      alert(obj.data.message);
      setList([]);
    }
  };
  return (
    <div className="place-order">
      <h3>Place your Order</h3>

      {list.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Unique_Code</th>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {list.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{ele.c_unique_code}</td>
                    <td>{ele.c_name}</td>
                    <td>{ele.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="order-btn">
            <button onClick={() => orderMeds()}>Order</button>
          </div>
        </>
      ) : (
        <p>Add something to cart.</p>
      )}
    </div>
  );
};

export default PlaceOrder;

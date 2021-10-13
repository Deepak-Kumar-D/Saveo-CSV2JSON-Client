import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Orders.css";

const Orders = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const orderList = async () => {
      const obj = await axios.get("http://localhost:5000/orders");
      console.log(obj.data);

      setList(obj.data);
    };

    orderList();
  }, [setList]);
  return (
    <div className="orders">
      <h3>Orders</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order_Id</th>
              <th>Unique_Code</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {list.map((ele, index) => {
              return (
                <tr key={index}>
                  <td>{ele._id}</td>
                  <td>
                    {ele.orders.map((orders) => {
                      return (
                        <p key={orders.c_batch_no}>{orders.c_unique_code}</p>
                      );
                    })}
                  </td>
                  <td>
                    {ele.orders.map((orders) => {
                      return <p key={orders.c_batch_no}>{orders.c_name}</p>;
                    })}
                  </td>
                  <td>
                    {ele.orders.map((orders) => {
                      return <p key={orders.c_batch_no}>{orders.quantity}</p>;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

import React, { useState } from "react";
import { useContext } from "react";
import { CartOrder } from "../App";
import axios from "axios";
import "../css/FindMedicine.css";
import { GoSearch } from "react-icons/go";

const FindMedicine = () => {
  const { list, setList } = useContext(CartOrder);
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const [qty, setQty] = useState(1);

  const List = async () => {
    const obj = await axios.get(
      `http://localhost:5000/getMedicineDetails/${search}`
    );

    setResult(obj.data);
  };

  const addtocart = () => {
    const tempList = {};

    result.forEach((ele) => {
      tempList.c_unique_code = +ele.c_unique_code;
      tempList.c_name = ele.c_name;
      tempList.quantity = +qty;
      tempList.c_batch_no = ele.c_batch_no;
    });

    const temp = [...list];
    temp.push(tempList);
    setList(temp);

    alert("Medicine added to the cart.");
  };

  return (
    <div className="findMedicine">
      <div className="searchbar">
        <input
          type="number"
          placeholder="Type the unique id of the medicine"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span onClick={() => List()}>
          <GoSearch />
        </span>
      </div>

      {result.length > 0 ? (
        <div className="meds-list">
          <table>
            <tbody>
              <tr>
                <th>Medicine Details </th>
              </tr>
              {result.map((meds) => {
                return (
                  <tr key={meds._id}>
                    <tr>
                      <th>Unique Code</th>
                      <td>{meds.c_unique_code}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{meds.c_name}</td>
                    </tr>
                    <tr>
                      <th>Manufacturer</th>
                      <td>{meds.c_manufacturer}</td>
                    </tr>
                    <tr>
                      <th>Packaging</th>
                      <td>{meds.c_packaging}</td>
                    </tr>
                    <tr>
                      <th>HSN Code</th>
                      <td>{meds.hsn_code}</td>
                    </tr>
                    <tr>
                      <th>MRP</th>
                      <td>{meds.n_mrp}</td>
                    </tr>
                    <tr>
                      <th>Balance Qty</th>
                      <td>{meds.n_balance_qty}</td>
                    </tr>
                    <tr>
                      <th>Batch No</th>
                      <td>{meds.c_batch_no}</td>
                    </tr>
                    <tr>
                      <th>Expiry Date</th>
                      <td>{meds.d_expiry_date}</td>
                    </tr>
                    <tr>
                      <th>Schemes</th>
                      <td>{meds.c_schemes}</td>
                    </tr>
                  </tr>
                );
              })}

              <tr>
                <th>
                  <input
                    type="number"
                    placeholder="Quantity"
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="Add to Cart"
                    onClick={() => addtocart()}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FindMedicine;

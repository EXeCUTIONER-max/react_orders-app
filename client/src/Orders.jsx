import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003")
      .then((result) => setOrders(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3003/deleteOrder/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-primary">
          Create Order +
        </Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price in $</th>
              <th>Number of items requested</th>
              <th>Billing Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.product}</td>
                  <td>{order.description}</td>
                  <td>{order.price}</td>
                  <td>{order.number}</td>
                  <td>{order.address}</td>
                  <td>
                    <Link
                      to={`/update/${order._id}`}
                      className="btn btn-primary"
                    >
                      Update Order
                    </Link>
                    <button
                      className="btn btn-dark text-white"
                      onClick={(e) => handleDelete(order._id)}
                    >
                      Delete Order
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Orders;

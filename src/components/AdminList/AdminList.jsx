
import axios from "axios";
import { useState, useEffect } from "react";

function AdminList() {
  const [customerOrders, setCustomerOrders] = useState([]);

  // Need GET request from order.router.js
  axios
    .get("/api/order")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(`We have a server error`, error);
    });
  return <div></div>;
}

export default AdminList;


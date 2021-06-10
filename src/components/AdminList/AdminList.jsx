import axios from "axios";
import { useState, useEffect } from "react";
import AdminListItem from "../AdminListItem/AdminListItem";


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function AdminList() {
  // pseudo code
  // need name, time placed, type, cost
  const [customerOrders, setCustomerOrders] = useState([]);

  // Need GET request from order.router.js
  const pastOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        console.log(response.data);
        setCustomerOrders(response.data);
      })
      .catch((error) => {
        console.log(`We have a server error`, error);
      });
  };

  useEffect(() => {
    pastOrders();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Cost</th>
        </thead>
        <tbody>
          <tr>
            {customerOrders.map((order, i) => {
              return <AdminListItem key={i} order={order} />;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;

import axios from "axios";
import { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Time Order Placed</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerOrders.map((order, i) => (
            <TableRow key={i}>
              <TableCell>{order.customer_name}</TableCell>
              <TableCell>{order.time}</TableCell>
              <TableCell>{order.type}</TableCell>
              <TableCell>{order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminList;

// <AdminListItem key={i} order={order} />;

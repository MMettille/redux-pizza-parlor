function AdminListItem({ order }) {
    console.log(order.time)
  return (
    <>
      <td>{order.customer_name}</td>
      <td>{order.time}</td>
      <td>{order.type}</td>
      <td>{order.total}</td>
    </>
  );
}

export default AdminListItem;

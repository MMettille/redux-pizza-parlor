import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

function TotalCost() {
  const customerOrder = useSelector((store) => store.customerOrder);

  const calculateTotalCost = (customerOrder) => {
    const pizzas = (sum, pizza) => sum + Number(pizza.total);
    const totalCost = customerOrder.reduce(pizzas, 0);
    return totalCost;
  };

  return (
    <>
      <ShoppingCartIcon>${calculateTotalCost(customerOrder)}</ShoppingCartIcon>
    </>
  );
}

export default TotalCost;

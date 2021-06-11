import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

function TotalCost() {
  const customerOrder = useSelector((store) => store.customerOrder);
  const calculateTotalCost = (customerOrder) => {
    /*
    This is the callback used by reduce
    It will be called for each thing in the array.
    Whatever it returns will be passed to the next call, in the `sum` variable
    When the reduce is complete, it passes the final sum to the reduce function.
    The sum of all the things is returned to who called reduce!
    */
    const pizzas = (sum, pizza) => sum + Number(pizza.price);

    /* 
    Reduce is an array method, like .map()
    .reduce() executes the callback function once for each element present in the array
    The 0 is the starting value -- every call to employeeSalary() increases that value
    by the employees annual salary.
    */

    const totalCost = customerOrder.reduce(pizzas, 0);
    console.log(totalCost);
    return totalCost.toLocaleString("en-US");
  };
  console.log(customerOrder);
  return (
    <p>
      <ShoppingCartIcon /> ${calculateTotalCost(customerOrder)}

    </p>
  );
}

export default TotalCost;

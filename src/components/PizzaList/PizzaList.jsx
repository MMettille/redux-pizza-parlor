import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './PizzaList.css';

function PizzaList() {

    // const [pizzas, setPizzas] = useState();
    const pizzas = useSelector(store => store.pizzas);

    const history = useHistory();


    const goNext = () => {
        history.push('/customerInfo')
    }


    return (
        <>
            <Box
                display="flex"
                flexWrap="wrap"
                m={2}
                p={2}>
                    {pizzas.map((foodItem, i) => {
                        return <PizzaListItem key={i} foodItem={foodItem} />
                    })}
                <div className="checkoutBtn">
                    <Button className="checkoutBtn" onClick={goNext}>Checkout</Button> 
                </div>
            </Box>
        </>
    )
}

export default PizzaList;
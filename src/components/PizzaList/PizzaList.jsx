import PizzaListItem from '../PizzaListItem/PizzaListItem';
// import axios from 'axios';
// import {useState} from 'react';
import {useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
function PizzaList() {

    // const [pizzas, setPizzas] = useState();
    const pizzas = useSelector(store => store.pizzas);

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
        </Box>
        </>
    )
}

export default PizzaList;
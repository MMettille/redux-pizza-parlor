import PizzaListItem from '../PizzaListItem/PizzaListItem';
// import axios from 'axios';
// import {useState} from 'react';
import {useSelector} from 'react-redux';

function PizzaList() {

    // const [pizzas, setPizzas] = useState();
    const pizzas = useSelector(store => store.pizzas);

    return (
        <>
        
            {pizzas.map((foodItem, i) => {
                return <PizzaListItem key={i} foodItem={foodItem} />
            })}
        </>
    )
}

export default PizzaList;
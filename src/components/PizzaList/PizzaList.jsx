import PizzaListItem from '../PizzaList/PizzaList';
import axios from 'axios';
import {useState} from 'react';

function PizzaList() {

    const [pizzas, setPizzas] = useState();

    const getOptions = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then(response => { //response is array of food options
            console.log(response.data);
            setPizzas(response.data);
        }).catch(error => {
            console.log('error in pizzalistitem get', error);
        })
    }

    return(
        <>
        
            {pizzas.map((foodItem, i) => {
                return <PizzaListItem key={i} foodItem={foodItem} />
            })};
        </>
    )
}

export default PizzaList;
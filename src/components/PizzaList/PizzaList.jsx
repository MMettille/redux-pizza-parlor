import PizzaListItem from '../PizzaListItem/PizzaListItem';
// import axios from 'axios';
// import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function PizzaList() {

    // const [pizzas, setPizzas] = useState();
    const pizzas = useSelector(store => store.pizzas);

    const history = useHistory();


    const goNext = () => {
        history.push('/customerInfo')
    }


    return (
        <>
        
            {pizzas.map((foodItem, i) => {
                return <PizzaListItem key={i} foodItem={foodItem} />
            })}

            <button onClick={goNext}>Next Page</button>

        </>
    )
}

export default PizzaList;
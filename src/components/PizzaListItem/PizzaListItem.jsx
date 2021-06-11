import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import './PizzaListItem.css';
import Button from '@material-ui/core/Button';


function PizzaListItem({foodItem}) {
    const [added, setAdded] = useState(false);

    const dispatch = useDispatch();

    const addItem = (foodItem) => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: {
                pizza_id: foodItem.id,
                quantity: 1
            }
        }) 
        setAdded(true)
    } 

    const removeItem = (foodItem) => {
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: foodItem
        }) 
        setAdded(false)
    } 

    return (
        
                <div className="menu-box">
                    
                    <img src={foodItem.image_path} />  

                    <section className="menu-description">
                        <h3>{foodItem.name}</h3>
                        <p>{foodItem.description}</p>
                        
                    </section>
                       
                    <section className="addRemoveBtn">
                        {!added ? (
                            <Button variant="contained" onClick={() => addItem(foodItem)}>ORDER NOW</Button>
                        ) : (
                            <Button variant="contained" onClick={() => removeItem(foodItem)}>Remove Pizza</Button>
                            )}
                        <h2>${foodItem.price}</h2>
                    </section>
                </div>

        
    )
}



export default PizzaListItem;


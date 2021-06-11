import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useState} from 'react';


function PizzaListItem({foodItem}) {

    const [added, setAdded] = useState(false);


    const dispatch = useDispatch();

    const addItem = (foodItem) => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: foodItem
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
        <div>
            {/* put these in tags of choice for looks */}
            <h3>{foodItem.name}</h3>
            <p>{foodItem.description}</p>
            <p>{foodItem.price}</p>
            
            
            <img src={foodItem.image_path} />

            <div className="addRemoveBtn">
                {!added ? (
                    <button onClick={() => addItem(foodItem)}>Add Pizza</button>
                ) : (
                    <button onClick={() => removeItem(foodItem)}>Remove Pizza</button>
                    )}
            </div>
        </div>
    )
}

//to customer info - import {useHistory} from "react-router-dom" --> history.push('/url')

export default PizzaListItem;


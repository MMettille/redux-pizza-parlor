import axios from 'axios';
import {useDispatch} from 'react-redux';


function PizzaListItem({foodItem}) {


    // const dispatch = useDispatch();

    

    return (
        <div>
            {/* put these in tags of choice for looks */}
            <h3>{foodItem.name}</h3>
            <p>{foodItem.description}</p>
            <p>{foodItem.price}</p>
            
            
            <img src={foodItem.image_path} />

            <button type="submit">Add Pizza</button>

        </div>
    )
}



export default PizzaListItem;
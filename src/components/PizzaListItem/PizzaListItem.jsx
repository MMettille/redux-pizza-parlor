import axios from 'axios';
import {useDispatch} from 'react-redux';


function PizzaListItem({foodItem}) {


    // const dispatch = useDispatch();

    

    return (
        <div>
            //put these in tags of choice for looks
            {foodItem.name}
            {foodItem.description}
            {foodItem.price}
            {foodItem.image_path}

            <button type="submit">Add Pizza</button>

        </div>
    )
}



export default PizzaListItem;
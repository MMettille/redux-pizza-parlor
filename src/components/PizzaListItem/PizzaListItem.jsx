import axios from 'axios';
import {useDispatch} from 'react-redux';


function PizzaListItem() {

    const 
    const dispatch = useDispatch();

    const displayOptions = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then(response => {
            
        })
    }
}

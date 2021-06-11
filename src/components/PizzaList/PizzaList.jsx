import PizzaListItem from '../PizzaListItem/PizzaListItem';
import {useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
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
        <Box
            display="flex"
            
            flexWrap="wrap"
            m={2}
            p={2}>
            {pizzas.map((foodItem, i) => {
                return <PizzaListItem key={i} foodItem={foodItem} />
            })}

            <button onClick={goNext}>Next Page</button>
        </Box>
        </>
    )
}

export default PizzaList;
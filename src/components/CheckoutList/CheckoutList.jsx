import { useSelector } from 'react-redux'
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'


function CheckoutList() {

    const customerOrder = useSelector(store => store.customerOrder);

    const customerInfo = useSelector(store => store.customerInfo);

    return (
        <>
            <h2>Checkout</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {customerOrder.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))}

                    {/* <CheckoutListItem /> */}
                </tbody>

            </table>


        </>
    )
}

export default CheckoutList

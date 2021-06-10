import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// ⬇ What we need to import from material UI
import Textfield from '@material-ui/core/TextField';

function PizzaForm (){

    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    return(
        <form>
            <h3>Step 2: Customer Information</h3>
            <div>
                <Textfield
                    required
                    id="outline-required"
                    label="Required"
                    placeholder="Name"
                    variant="outlined"
                />
                <Textfield
                    required
                    id="outline-required"
                    label="Required"
                    placeholder="Street Address"
                    variant="outlined"
                />
                <Textfield
                    required
                    id="outline-required"
                    label="Required"
                    placeholder="City"
                    variant="outlined"
                />
                <Textfield
                    required
                    id="outline-required"
                    label="Required"
                    placeholder="Zip Code"
                    variant="outlined"
                />
            </div>
            <div>
                
            </div>
        </form>
    )
}

export default PizzaForm
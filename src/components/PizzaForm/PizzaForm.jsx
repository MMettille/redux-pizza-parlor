import './PizzaForm.css'

import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {useHistory} from 'react-router-dom';

// ⬇ What we need to import from material UI
import Textfield from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function PizzaForm (){

    const history = useHistory('')

    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [preference, setPreference] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`clicked!`)
        dispatch({type: 'ADD_CUSTOMER', payload: {
            customer_name: name,
            street_address: streetAddress,
            city: city,
            zip: zipCode,
            type: preference
        }})
        clearCustomerFields();
        history.push('/checkout');
    }

    const clearCustomerFields = () => {
        setName('');
        setStreetAddress('');
        setCity('');
        setZipCode('')
    };

    return(
        <>
            <h3>Step 2: Customer Information</h3>
            <form onSubmit={handleSubmit}>
                <div className="flex-container" >
                    <Box display="flex" flexDirection="column" p={2} m={1} bgcolor="background.paper">
                        <Textfield
                            required
                            id="outline-required"
                            label="Required"
                            placeholder="Name"
                            variant="outlined"
                            onChange={(evt) => setName(evt.target.value)}
                        />
                        <Textfield
                            required
                            id="outline-required"
                            label="Required"
                            placeholder="Street Address"
                            variant="outlined"
                            onChange={(evt) => setStreetAddress(evt.target.value)}
                        />
                        <Textfield
                            required
                            id="outline-required"
                            label="Required"
                            placeholder="City"
                            variant="outlined"
                            onChange={(evt) => setCity(evt.target.value)}
                        />
                        <Textfield
                            required
                            id="outline-required"
                            label="Required"
                            placeholder="Zip Code"
                            variant="outlined"
                            onChange={(evt) => setZipCode(evt.target.value)}
                        />
                    </Box >
                    <Box display="flex" flexDirection="column" p={1} m={1} bgcolor="background.paper">
                        <FormLabel component="legend">Delivery or Pickup?</FormLabel>
                        <RadioGroup aria-label="Options">
                            <FormControlLabel value="Takeout" control={<Radio />} label="Pickup" onChange={(evt) =>
                            setPreference(evt.target.value)} />
                            <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" onChange={(evt) =>
                            setPreference(evt.target.value)} />
                        </RadioGroup>
                    </Box>
                </div>
                <div className="saveBtn">
                    <Button className="saveBtn" type="submit" size="large">SAVE</Button>
                </div>
            </form>
        </>
    )
}

export default PizzaForm
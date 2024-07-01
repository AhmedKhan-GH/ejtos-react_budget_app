import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(''); // Default selection

    const handleChange = (event) => {
        const currency = event.target.value;
        setSelectedCurrency(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    };

    return (
        <div>
            <select 
                className="alert alert-success" 
                id="currency_select" 
                value={selectedCurrency}
                onChange={handleChange}
            >
                <option defaultValue>Choose...</option>
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;

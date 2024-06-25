import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    //initialize an array and value based on context
    const { expenses, budget } = useContext(AppContext);

    //expenses has a member function called reduce
    //it takes a callback lambda and initial value,
    //this callback adds all the elements of the expenses array 
    const totalExpenses = expenses.reduce((total, item) => 
    {
        return (total = total + item.cost);
    }, 0);

    //ternary operator to decide alert type
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
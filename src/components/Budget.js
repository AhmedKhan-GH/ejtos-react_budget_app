import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

//we create a component called Budget 
//we define a const budget that takes the Store we defined in context
//and we create a hook newBudget 

//budget component
const Budget = () => {

    //local budget variable initialized from the context
    const { budget } = useContext(AppContext);

    //new budget hook with initial budget
    const [newBudget, setNewBudget] = useState(budget);
    
    //event handler, it extracts the payload value
    //and uses the hook to update the budget
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>

        </div>
    );
};

export default Budget;
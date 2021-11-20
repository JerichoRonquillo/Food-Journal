import React, { useState } from 'react';

const element = (
    <div>
        <header>
            <h1>Food Journal</h1>
        </header>
    </div>
)
ReactDOM.render(element, document.getElementById('root'));

function foodForm() {
    const [food, setFood] = useState;
    
    return (
        <form>
            <label>What did you eat today?
                <input type="text"></input>
                <button onClick={() => setFood(food)}>
                    Submit
                </button>
            </label>
        </form>
    )
}
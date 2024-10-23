import React, { useState } from "react";

const CardCounter = () => {
    const increment = () => { setCount(count + 1); };
    const decrement = () => { setCount(count - 1); };
    const [count, setCount] = useState(0);
    return (
        <div> 
            <h2>Card Counter</h2>
            <p>Count: { count }</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
};

/* const CardCounter = () => {
    return (
        <div> 
            <h2>Card Counter</h2>
            <p>Count: 0</p>
            <button>Increase</button>
            <button>Decrease</button>
        </div>
    );
}; */

export default CardCounter;
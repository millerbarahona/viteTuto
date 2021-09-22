import { useState } from 'react'

export const useCounter = (initialcounter = 10) => {
    const [counter, setCounter] = useState(initialcounter);
    
    // const increment = ( factor = 1 ) => {
    //     setCounter( counter + factor);
    // }

    // const decrement = (factor = 1 ) => {
    //     setCounter( counter - factor);
    // }

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter(initialcounter);
    }

    return {
        counter,
        increment, 
        decrement,
        reset
    };
}

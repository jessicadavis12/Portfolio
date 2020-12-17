import React, {useState }from 'react'

function IngredientCounter({initialCount}) {
    const [count, setCount] = useState(initialCount);
   

    return(
        <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount-1)}>Reset</button>
        <button onClick={() => setCount(prevCount=> prevCount+1 )}>Reset</button>

        </>
    );
}

export default IngredientCounter 
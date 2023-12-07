import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState<number>(0)
    const increase: () => void = () => {
      setCount(count + 1);
    };
  
    const decrease: () => void = () => {
      setCount(count - 1);
    };
  return (
    <div>
      <h2>Counter</h2>

        <button onClick={increase}>+</button>
        <p>{count}</p>
        <button onClick={decrease}>-</button>
    </div>
  )
}

export default Counter

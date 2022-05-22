import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 

function Counter({ index }) {
  const dispatch = useDispatch()
  const counters = useSelector((state) => state.counters)
  
  return (
    <div>
      <h1>{counters[index]}</h1>
      <p>
        <button onClick={() => { dispatch(increment(index)) }}> + </button>
        <button onClick={() => { dispatch(decrement(index)) }}> - </button>
        <button onClick={() => { dispatch(reset(index)) }}>Reset</button>
      </p>
    </div>
  )
}

export default Counter
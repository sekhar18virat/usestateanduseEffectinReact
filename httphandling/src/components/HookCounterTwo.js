import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
  return (
    <div>
      Count {count}
      <button onClick = {()=> setCount((prevCount) => prevCount + 1)}>Increment by 1</button>
      <button onClick = { () => setCount((prevCount)  => prevCount - 1)}>Decrement by 1</button>
      <button onClick = {() => setCount((prevCount) => prevCount + 5)}>Increment by 5</button>
      
    </div>
  )
}

export default HookCounterTwo

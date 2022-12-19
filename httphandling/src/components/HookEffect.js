import React, {useState, useEffect} from 'react'

function HookEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {

        document.title = `you clicked ${count} times`
    })
  return (
    <div>
      <button onClick = {() => setCount((count) => count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookEffect

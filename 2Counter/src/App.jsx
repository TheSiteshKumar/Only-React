import { useState } from 'react'

function App() {
  const [count, setCount] = useState(5)

  const addValue = ()=>{
    if (count<20){
    setCount(count+1)
    }
  }
  const subValue = ()=>{
    if (count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {count}</h2>

      <button
      onClick={subValue}
      >Decrease: {count} </button>

      <button
      onClick={addValue}
      >Increase: {count}</button>
    </>
  )
}

export default App

import { useState } from "react"
const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="counter-container">
      <div className="counter">
        <span>{count}</span>
        <div className="buttons">
          <button onClick={() => { setCount(count + 1) }}>Plus Button</button>
          <button onClick={() => { setCount(count - 1) }}>Minus Button</button>
          <button onClick={() => { setCount(0) }}>Reset Button</button>
        </div>
      </div>

    </div>
  )
}

export default Counter;
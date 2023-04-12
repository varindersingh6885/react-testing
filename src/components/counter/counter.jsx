import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="number"
        placeholder="Enter value"
        value={amount}
        name="amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => setCount(parseInt(amount))}>Set</button>
    </div>
  );
};

export default Counter;

import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);
  const [no, setNo] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  function onNo() {
    setNo(no + 1);
  }

  // function handleIncrement(){
  //     setCount(count+1)
  // }
  // function handleDecrement(){
  //     setCount(count-1)
  // }
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <p>{no}</p>
      <button onClick={onNo}> Bdha bhai</button>
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
  console.log("rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});

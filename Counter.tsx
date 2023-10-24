import React, { ReactNode, useState } from "react";

type CounterProps = {
  initialCount: number;
  children?: ReactNode;
};

const Counter: React.FC<CounterProps> = (props) => {
    const [count, setCount] = useState(props.initialCount);
    const increase = () => {
        setCount( count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
  return (
    <div>
        <p> Count: {count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        
    </div>
  );
}



 export default Counter;




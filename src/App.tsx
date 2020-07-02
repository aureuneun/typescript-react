import React, { useState } from "react";
import Number from "./Number";
import { From, Input } from "./Form";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const incrementCount = (): void => setCount((count) => count + 1);
  const decrementCount = (): void => setCount((count) => count - 1);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="App">
      <From onSubmit={onSubmit}>
        <Input value={value} onChange={onChange} />
      </From>
      <Number count={count} />
      <button onClick={incrementCount}>INC</button>
      <button onClick={decrementCount}>DEC</button>
    </div>
  );
};

export default App;

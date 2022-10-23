import { FormEvent, InputHTMLAttributes, useState } from "react";
import { Plus, Minus } from 'phosphor-react';

import { InputMinus } from "./styles";

interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
  inventory: number;
}

export const Counter = ({ inventory, ...rest }: CounterProps): JSX.Element => {
  const [counter, setCounter] = useState(1);

  const addCounter = () => {
    if (counter === inventory) {
      return;
    }

    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    if (counter === 1) {
      return;
    }

    setCounter(counter - 1);
  }

  return (
    <InputMinus {...rest}>
      <button onClick={decreaseCounter} disabled={counter === 1 ? true : false}>
        <Minus />
      </button>
      <input type="number" value={counter} name="counter" id="counter" readOnly />
      <button onClick={addCounter} disabled={counter === inventory ? true : false}>
        <Plus />
      </button>
    </InputMinus>
  )
}

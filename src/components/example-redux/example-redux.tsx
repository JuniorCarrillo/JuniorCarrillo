import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../infrastructure/redux-store/slices/counterSlice";

export default function ExampleRedux() {
  const count = useSelector((state) => (state as any).counter.value)
  const dispatch = useDispatch()

  return (
    <div className="h-12 w-full">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

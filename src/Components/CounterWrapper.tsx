import React from "react";
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { incrementByAmount } from "../Features/CounterSlice";
import { Wrapper, RequestButton, Text, Justify } from "../Styles/Counter.style";

const CounterWrapper = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Text>You currently have {count} request(s) left.</Text>
      <Justify>
        <RequestButton onClick={() => dispatch(incrementByAmount(10))}>
          Add 10 requests
        </RequestButton>
      </Justify>
    </Wrapper>
  )
}
export default CounterWrapper
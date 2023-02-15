import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../Features/CounterSlice";
import { Wrapper, RequestButton, Text, Justify } from "../Styles/Counter.style";

export default function CounterWrapper() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>You currently have {count} request(s) left.</Text>
      <Justify>
        <RequestButton onClick={() => dispatch(incrementByAmount(10))}>
          Add 10 requests
        </RequestButton>
      </Justify>
    </Wrapper>
  );
}

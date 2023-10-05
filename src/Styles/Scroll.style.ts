import styled from "styled-components";

export const ScrollStyle = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 0 0.25rem 0.5rem 0 gray;
  opacity: 0.7;
  cursor: pointer;
  z-index: 2;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

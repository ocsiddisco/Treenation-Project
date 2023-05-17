import styled from "styled-components";

export const DetailsStyle = styled.div`
  @import url("./Font/OpenSans/OpenSans-Light.ttf");
  @import url("./Font/OpenSans/OpenSans-Regular.ttf");
  display: flex;
  flex-direction: column;

  width: 40em;
  margin: 10px 10px 10px 10px;
  align-self: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 14px 14px -18px;
  color: #645f11;
  font-size: 1rem;
  line-height: 23px;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 100;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: scale(1.005);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }

  & h1 {
    display: flex;
    justify-items: center;
    font-family: "OpenSans-Light", sans-serif;
    font-weight: 300;
  }

  & h4 {
    font-family: "OpenSans-Regular", sans-serif;
    font-weight: 200;

    margin-top: 3px;
    line-height: 1.3em;
    text-align: justify;
    @media (max-width: 640px) {
      text-align: center;
    }
  }
`;

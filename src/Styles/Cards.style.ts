import styled from "styled-components";

export const StyledCard = styled.div`
  @import url("./Font/OpenSans/OpenSans-Light.ttf");
  @import url("./Font/OpenSans/OpenSans-Regular.ttf");
  box-sizing: border-box;
  width: 22em;
  margin: 10px 10px 10px 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 14px 14px -18px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: transform 0.5s ease, 0.45s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  & h4 {
    display: flex;
    font-family: "OpenSans-Light", sans-serif;
    line-height: 1.2em;
    color: #645f11;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2px;
    font-weight: 200;
    padding: 0 10px 0 10px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 640px) {
      font-size: 24px;
    }
  }

  & p {
    font-family: "OpenSans-Regular", sans-serif;
    color: #645f11;
    line-height: 1.3em;
    text-align: justify;
    font-weight: 200;
    margin: 10px;
    font-size: 18px;

  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: scale(1.02);
    background-color: #645f11;

    & h4,
    p {
      color: white;
    }
  }
`;

import styled from "styled-components";

export const DetailsStyle = styled.div`
  @import url("./Font/OpenSans/OpenSans-Light.ttf");
  @import url("./Font/OpenSans/OpenSans-Regular.ttf");
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 50%;
  margin: 20px 0 20px 0;
  align-self: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 14px 14px -18px;
  color: #645f11;
  padding: 20px;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 100;
  @media (max-width: 1500px) {
      width:60%
    }
    @media (max-width: 900px) {
      width:80%
    }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: scale(1.005);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }

  & h4 {
    display: flex;
    text-align:center;    
    font-family: "OpenSans-Light", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 0 10px 0 10px;
    margin-top: 20px;
    margin-bottom: 20px;
   
  }

  .bold {
    font-weight: bold;
  }
  .space {
  padding-top: 5px;
 }
  & p {
    font-family: "OpenSans-Regular", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    margin: 10px;
    line-height: 1.2rem;
    text-align: justify;
    @media (max-width: 640px) {
      text-align: center;
    }
  }
`;

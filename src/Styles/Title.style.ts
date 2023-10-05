import styled from "styled-components";

export const Title = styled.div`
  color: #645f11;
  font-family: "OpenSans-Light", sans-serif;
  padding: 0 20px 0 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items :center;

  & h1 {
    font-size: 42px;
    font-weight: 300;
letter-spacing: 2px;
  padding: 0 20px 0 20px;
  text-transform: uppercase;
  margin-bottom: 0;
  
}

  & p {
    text-align: center;
width: 60%;
font-size: 20px;
@media (max-width: 900px) {
  width: 80%;
  }
}
  
`;

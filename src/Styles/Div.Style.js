import styled from "styled-components";

export const ComponentCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ComponentTwo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;

`;

export const ComponentThree = styled.div`
    display: flex;
    flex-direction: column;
    & h4 {
        margin-top: 5px;
        padding: 0 10px 0 10px;
    }

`
export const ComponentCenterColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ComponentBottom = styled.div`
    display:flex;
    justify-items: flex-end;
    align-items: flex-end;
`
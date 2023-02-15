import styled from "styled-components";

export const ErrorPageStyle = styled.div`
    display:flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;

    && h2 {
        color: #8D8741;
    }

    && img {
        border: 1px;
        border-radius: 20px;
    }
`
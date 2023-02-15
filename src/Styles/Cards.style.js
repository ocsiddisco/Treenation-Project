import styled from "styled-components";

export const StyledCard = styled.div`
    @import url('./Font/OpenSans/OpenSans-Light.ttf');
    @import url('./Font/OpenSans/OpenSans-Regular.ttf');

    width: 25em;
    margin: 10px 10px 10px 10px;
    align-self: center;
    background-color: #fff;
    background-position: 0 90%;
    background-size: 4px 3px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    line-height: 23px;
    outline: none;
    padding: .75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
    }

    &:focus {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    }
    
    & h1 {
        display: flex;
        justify-items: center;
        font-family: 'OpenSans-Light', sans-serif;
        font-weight: 300;
        line-height: 1.2em;
        color: black;
    }

    & h4 {
        font-family: 'OpenSans-Regular', sans-serif;
        color: black;
    }

`;
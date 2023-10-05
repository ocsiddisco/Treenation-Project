import styled from "styled-components";


export const BackButton = styled.button`
  --b: 1px;   /* border thickness */
  --s: .35em; /* size of the corner */
  --color: #373B44;
  align-self: flex-end;
  padding: calc(.3em + var(--s)) calc(.7em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .3em;
  font-size: 16px;
  cursor: pointer;
  margin: 30px 40px 0 20px;
  align-self: flex-start;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

&:active {
  background: var(--color);
  color: #fff;
}
`
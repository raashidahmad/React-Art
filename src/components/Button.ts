import { styled } from "styled-components";

export const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  & .button:hover {
    background-color: #f0920e;
  }

  & .text-button {
    color: #f0b322;
    border: none;
  }

  & .text-button:hover {
    color: #f0920e;
  }
`;
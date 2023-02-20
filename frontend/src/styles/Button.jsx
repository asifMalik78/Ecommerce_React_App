import styled from "styled-components";

export const Button = styled.button`
  text-decoration:none;
  max-width:auto;
  background-color:${({theme}) => theme.colors.helper};
  color:rgb(255,255,255);
  padding:1rem 2rem;
  border:none;
  text-transform:uppercase;
  text-align: center;
  font-size:1.4rem;
  cursor:pointer;
  border-radius:0.3rem;
  transition:all 0.3s ease;
  -webkit-transition:all 0.3s ease 0s;
  -moz-transition:all 0.3s ease 0s;
  -o-transition:all 0.3s ease 0s;

  &:hover , &:active{
    box-shadow:0 2rem 2rem 0 rgb(132 144 255/30%);
    box-shadow:${({theme}) => theme.colors.shadowSupport};
    transform:scale(0.96);
  }

  a{
    text-decoration: none;
    color:rgb(255,255,255);
    font-size:1.4rem;
  }
`;
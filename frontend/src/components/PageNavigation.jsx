import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    height:4rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size:2.5rem;
    padding-left:1.8rem;

    a{
        font-size:2.5rem;
    }
`
const PageNavigation = ({title}) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  )
}

export default PageNavigation;

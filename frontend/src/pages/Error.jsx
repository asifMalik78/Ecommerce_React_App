import {useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Wrapper = styled.section`
  .container{
    padding:9rem 0;
    text-align:center;

    h1{
      font-size:10rem;
    }

    h3{
      font-size:4.2rem;
    }

    p{
      margin:2rem 0;
    }
  }
`;
const Error = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h1>404</h1>
          <h3>UH OH! You're lost.</h3>
          <p>
          The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Button onClick={() => navigate("/")}>
            Go Back to Home
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Error

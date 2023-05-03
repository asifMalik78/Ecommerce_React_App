import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../styles/Button";
const ListView = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="container grid">
        {product &&
          product.map((curr, idx) => {
            const { _id, name, image, price, description } = curr;
            return (
              <div className="card grid list-grid-two-column" key={_id}>
                <figure>
                  <img src={image[0]} alt="my image" />
                </figure>

                <div className="card-data">
                  <h3>{name}</h3>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 80)}....</p>

                  <Button
                    className="btn"
                    onClick={() => navigate(`/singleproduct/${id}`)}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 7rem 0;

  .container {
    width: 100%;
  }

  .grid {
    gap: 3.2rem;
  }

  .list-grid-two-column {
    grid-template-columns: 0.6fr 1fr;
    border-radius: 0.5rem;
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 90%;
      margin: 1.5rem 0;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170/40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 /0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }

      &:hover a {
        background-color: rgb(98 84 243);
      }

      a {
        color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }

      a {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;
export default ListView;

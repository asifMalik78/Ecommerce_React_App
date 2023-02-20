import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
const Wrapper = styled.section`
    .icon-style{
        display: flex;
        gap:0.2rem;
        align-items: center;
        justify-content: flex-start;

        .icon{
            font-size: 2rem;
            color:orange;
        }

        .empty-icon{
            font-size: 2.6rem;
        }

        p{
            margin-left:1.4rem;
        }
    }
`
const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elm, idx) => {
    let number = idx + 0.5;
    return (
      <div key={idx}>
        {stars >= idx + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </div>
    );
  });
  return (
    <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <div>{reviews} customer reviews</div>
        </div>
    </Wrapper>
  );
};

export default Star;

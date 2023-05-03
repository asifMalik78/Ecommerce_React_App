import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height:60%;
      background-size: cover;
      object-fit: contain;
      border-radius: 0.6rem;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.6rem;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs && imgs.map((curElm, index) => {
          return (
            <figure key={index}>
              <img
                src={curElm}
                alt="product-img"
                className="box-image--style"
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>

      {/* 2nd column */}

      <div className="main-screen">
        <img src={mainImage} alt="product-img" />
      </div>
    </Wrapper>
  );
};

export default MyImage;

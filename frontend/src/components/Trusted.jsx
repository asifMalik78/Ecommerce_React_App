import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
    padding:9rem 0;
    background-color: ${({theme}) => theme.colors.bg};
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        row-gap:3rem;
    }

    .companys{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .slide img{
        width:12rem;
    }

  
`;
const Trusted = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>Trusted 1000+ Companys</h3>
        <div className="companys">
            <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
            </div>

            <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>

          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>

          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
        </div>
        <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
        </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Trusted;

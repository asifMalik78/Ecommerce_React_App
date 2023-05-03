import styled from "styled-components";
import { useProductContext } from "../context/productContext";
import Product from "./Product";

const Wrapper = styled.section`
  padding:9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container{
    max-width:120rem;
  }

  figure{
    width:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition:all 0.5s linear;

    &::after{
        content:"";
        position: absolute;
        top:0;
        left:0;
        width:0%;
        height:100%;
        background-color: rgba(0,0,0,0.5);
        transition: all 0.2s linear;
        /* border-radius:0.8rem 0.8rem 0 0; */
        z-index:99;
        cursor:pointer;

        &hover{
            width:100%;
        }
    }

    &:hover::after{
        width:100%;
    }

    &:hover img{
        transform:scale(1.2);
    }

    img{
        max-width:90%;
        margin-top:1.5rem;
        height:20rem;
        transition:all 0.2s linear;
    }

    .caption{
        position: absolute;
        top:15%;
        right:10%;
        text-transform: uppercase;
        background-color: ${({theme}) => theme.colors.bg};
        color:${({theme}) => theme.colors.helper};
        padding:0.8rem 2rem;
        font-size:1.2rem;
        border-radius:2rem;
        z-index:999;
    }
  }

  .card{
    background-color: #fff;
    border-radius: 0.8rem;

    .card-data{
        padding:0 2rem;
    }

    .card-data-flex{
        margin:2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3{
        color:${({theme}) => theme.colors.text};
        text-transform: capitalize;
    }

    .card-data--price{
        color:${({theme}) => theme.colors.helper};
    }

    .btn{
        margin:2rem auto;
        border-color:rgba(0,0,0/0%);
        border:0.1rem solid rgb(98,84,243);
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: rgb(98,84,243);
        }

        a{
            color:${({theme}) => theme.colors.btn};
            font-size:1.4rem;
        }
    }
  }

  @media (max-width:${({theme}) => theme.media.mobile}){
    .container .grid-three-column{
        grid-template-columns: repeat(1 , 1fr);
        gap:2rem;
        figure img{
            width:100%;
            height:25rem;
        }
    }
  }

`;
const FeaturedProducts = () => {
  const {  featuredProducts } = useProductContext();
  
  return (
    <Wrapper>
      <div className="container">
        <h3 className="intro-data">Check Now!</h3>

        <div className="common-heading">Our Feature Products</div>

        <div className="grid grid-three-column">
            {featuredProducts.map((currElem) => {
                return (
                    <Product key={currElem._id} {...currElem} />
                )
            })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;

import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Wrapper = styled.section`
  padding:7rem 0;
  .grid{
    gap:4.8rem;
  }

  h3{
    margin-top:1.4rem;
    font-size: 2rem;
  }

  .container{
    padding:2rem;
    display: flex;
    height:30rem;
    gap:3rem;
  }

  .services-1,.services-2,.services-3{
    flex:1;
    height:100%;
    background-color:${({theme}) => theme.colors.bg};
    border-radius:1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .services-2{
    flex:1;
    flex-direction: column;
    width:100%;
    gap:2rem;
    justify-content: space-between;
    background-color:white;
  }

  .services-row-1 , .services-row-2{
    flex:1;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:1.2rem;
    background-color:${({theme}) => theme.colors.bg};
  }

  .icon{
    width:6rem;
    height:6rem;
    padding:2rem;
    border-radius:50%;
    background-color:#fff;
    color:#5138ee;
  }

  .icon-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-wrapper-row{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap:2rem;
  }

  @media (max-width:${({theme})=> theme.media.mobile}){
    .container{
      flex-direction: column;
      height:auto;
    }

    .services-1 , .services-3{
      padding: 4rem 0;
    }

    .services-row-1 , .services-row-2{
      padding: 4rem 0;
      flex-direction: column;
      height:auto;
    }

    .icon-wrapper{
      row-gap:3rem;
    }

    .icon-wrapper-row{
      flex-direction: column;
      row-gap:3rem;
    }
  }
`;
const Services = () => {
  return (
    <Wrapper>
      <div className="container">
      <div className="services-1">
        <div className="icon-wrapper">
          <TbTruckDelivery className="icon"/>
          <h3>Super Fast and Free Delivery</h3>
        </div>
      </div>
      <div className="services-2">
        <div className="services-row-1">
          <div className="icon-wrapper-row">
            <MdSecurity className="icon"/>
            <h3>Non-contact Shipping</h3>
          </div>
        </div>
        <div className="services-row-2">
        <div className="icon-wrapper-row">
            <GiReceiveMoney className="icon"/>
            <h3>Money-back Guaranteed</h3>
          </div>
        </div>
      </div>
      <div className="services-3">
      <div className="icon-wrapper">
            <RiSecurePaymentLine className="icon"/>
            <h3>Super Secure Payment System</h3>
          </div>
      </div>
      </div>
    </Wrapper>
  )
}

export default Services;

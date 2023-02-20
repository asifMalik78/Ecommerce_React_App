import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: center;
    }
  }

  footer {
    padding: 14rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-subscribe form {
      display: flex;
      justify-content: center;
      align-items: center;

      input[type="submit"] {
        margin-top: 0;
        border-radius: 0 0.3rem 0.3rem 0;
      }

      input {
        border-radius: 0.3rem 0 0 0.3rem;
      }
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          cursor: pointer;
          font-size:2.5rem;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;
      padding-bottom: 0;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 100vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      padding: 4rem 3rem;

      .grid-two-column {
        display: flex;
        justify-content: space-between;
      }
    }

    footer {
      padding-bottom: 3rem;
      padding-top: 8rem;
      .grid-four-column {
        display: flex;
        flex-direction: column;
        row-gap: 2.6rem;
      }

      .footer-subscribe form {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        row-gap: 1rem;
        input[type="submit"] {
          margin-top: 0;
          border-radius: 0.3rem;
        }

        input {
          width: 100%;
          border-radius: 0.3rem;
        }
      }

      .footer-social{

        .footer-social--icons div{
            padding:1rem;

            .icons{
                font-size:4.5rem;
            }
        }
      }

      .footer-bottom--section {
        padding-top: 3rem;
      }
    }
  }
`;
const Footer = () => {
  return (
    <div>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get Started ?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">Get Started</Button>
            </div>
          </div>
        </section>

        {/* footer section starts */}
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Asif Malik</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores earum dignissimos ducimus.
              </p>
            </div>

            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <input type="submit" value="subscribe" />
              </form>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>

                <div>
                  <FaInstagram className="icons" />
                </div>

                <div>
                  <FaYoutube className="icons" />
                </div>
              </div>
            </div>

            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 1234567894</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>@{new Date().getFullYear()} Ecom Store. All Rights Reserved</p>

              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
};

export default Footer;

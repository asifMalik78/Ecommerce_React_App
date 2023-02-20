import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;
      form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        input {
          border-radius: 0.5rem;
        }

        textarea {
          border-radius: 0.5rem;
        }
      }
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 0.5rem;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
const Contact = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h2 className="common-heading">Contact Page</h2>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.069448739533!2d77.50180291500541!3d28.47745508247918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea700555d7f1%3A0xe5f8a9cb7e683641!2sBeta%201%20Block%20A%20Rd%2C%20Block%20A%2C%20Beta%20I%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1675703992854!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "0.5rem",
              border: "1px solid black",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          ></iframe>
        </div>
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mnqypqnw"
              method="post"
              className="contact-form"
            >
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="enter your message"
              ></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;

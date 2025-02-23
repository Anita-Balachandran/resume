import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #fff;
    margin-bottom: 1rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contact</h3>
          <p>Email: anita.prince1218@gmail.com</p>
          <p>Phone: 91+ 9962291924</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <p><a href="/about">About</a></p>
          <p><a href="/blog">Blog</a></p>
          <p><a href="/contact">Contact</a></p>
        </FooterSection>
        <FooterSection>
          <h3>Professional</h3>
          <p><a href="https://www.linkedin.com/in/anita-balachandran-11106a303/">LinkedIn</a></p>
          <p><a href="https://myfitbrain.in/online-therapists/anita-balachandran">My fit brain Profile</a></p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer; 
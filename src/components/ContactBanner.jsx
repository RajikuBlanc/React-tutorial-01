import React from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';
import { Medias } from '../styles/Media';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper{
    background-color: var(--deep-dark);
    border-radius: 12px;
    text-align: center;
    padding: 5rem 0;
  }
  .contactBanner__title{
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  ${Medias.tab}{
  .contactBanner__title{
    font-size: 2.8rem;
  }

  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__title">Let me help you</h3>
          <Button btnLink="/contact" btnText="Contact Now" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}

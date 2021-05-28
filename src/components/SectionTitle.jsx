import React from "react";
import styled from "styled-components";
import { Medias } from "../styles/Media";

const SectionTitleStyled = styled.div`
  text-align: center;
  p {
    font-family: "RobotoMono Regular";
    font-size: 2rem;
  }
  h2 {
    font-family: "Montserrat Bold";
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  ${Medias.tab} {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({ subTitle = "SubTitle", Title = "Title" }) {
  return (
    <SectionTitleStyled className="sectionTitle">
      <p>{subTitle}</p>
      <h2>{Title}</h2>
    </SectionTitleStyled>
  );
}

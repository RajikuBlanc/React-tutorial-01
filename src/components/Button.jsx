import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Medias } from "../styles/Media";

export default function Button({ outline = false, btnLink = "link", btnText = "Text" }) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  margin-top: 2rem;
  width: 100%;
  .button {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 2.2rem;
    background-color: ${props => (props.outline ? "transpartent" : "var(--gray-1)")};
    border-radius: 8px;
    border: 1px solid var(--gray-1);
    color: ${props => (props.outline ? "var(--gray-1)" : "#000")};
  }
  ${Medias.tab} {
    .button {
      font-size: 1.8rem;
    }
  }
`;

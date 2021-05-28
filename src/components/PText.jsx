import React, { Component } from "react";
import styled from "styled-components";
import { Medias } from "../styles/Media";

class PText extends Component {
  render() {
    return (
      <PStyle className="ptext">
        <p>{this.props.text}</p>
      </PStyle>
    );
  }
}

export default PText;

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  ${Medias.tab} {
    font-size: 1.4rem;
  }
`;

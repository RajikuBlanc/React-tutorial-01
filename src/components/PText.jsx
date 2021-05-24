import React, { Component } from "react";
import styled from "styled-components";

class PText extends Component {
  render() {
    return (
      <PStyle>
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
  line-height: 1.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

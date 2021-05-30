import React from 'react'
import styled from 'styled-components'
import { Medias } from '../styles/Media'

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  ${Medias.tab} {
    font-size: 1.4rem;
  }
`

export default function PText({ children }) {
  return (
    <PStyle className="ptext">
      <p>{children}</p>
    </PStyle>
  )
}

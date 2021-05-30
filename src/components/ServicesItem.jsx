import React from 'react'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md'
import styled from 'styled-components'
import PText from './PText'

const ServicesItemStyle = styled.li`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .ptext {
    margin-top: 2rem;
  }
`

export default function ServicesItem({
  servicesIcon = <MdDesktopMac />,
  servicesTitle = 'servicesTitle',
  desc = 'hellotext'
}) {
  return (
    <ServicesItemStyle>
      <figure className="servicesItem__icon">{servicesIcon}</figure>
      <p className="servicesItem__title">{servicesTitle}</p>
      <PText>{desc}</PText>
    </ServicesItemStyle>
  )
}

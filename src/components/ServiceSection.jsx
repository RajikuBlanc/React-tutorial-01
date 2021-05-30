import React from 'react'
import styled from 'styled-components'
import { Medias } from '../styles/Media'
import SectionTitle from './SectionTitle'
import ServicesItem from './ServicesItem'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md'

const ServicesListStyle = styled.div`
  padding: 10rem 0;
  .servicesList {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    margin-top: 5rem;
  }
  ${Medias.tab} {
    .servicesList {
      max-width: 350px;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`

export default function ServiceSection() {
  return (
    <ServicesListStyle>
      <div className="container">
        <SectionTitle subTitle="What i will do for you" Title="Services" />
        <ul className="servicesList">
          <ServicesItem
            servicesIcon={<MdDesktopMac />}
            servicesTitle="Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesItem
            servicesIcon={<MdCode />}
            servicesTitle="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesItem
            servicesIcon={<MdPhonelinkSetup />}
            servicesTitle="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui."
          />
        </ul>
      </div>
    </ServicesListStyle>
  )
}

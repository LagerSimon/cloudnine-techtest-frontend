import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../constants"
import Rating from "../components/Rating"
import Icon from "../components/Icon"
import HeroImage from "../images/hero-image.jpg"

const Hero = styled.div`
  position: relative;
  height: 25rem;
  display: flex;
  align-items: flex-end;
  background-image: url(${HeroImage});
  background-size: cover;
`

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BackIcon = styled(Icon)`
  transform: rotate(180deg);
  width: 1.4rem;
`

const InfoIcon = styled(Icon)`
  margin-right: 1rem;
`

const Details = styled.div`
  height: 12.5rem;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 0 1.5rem 2.5rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`

const Name = styled.h1`
  color: ${colors.white};
  margin-bottom: 1rem;
`

const Tabs = styled.ul`
  display: flex;
  border-bottom: 0.1rem solid ${colors.borderColorLight};
`

const Tab = styled.li`
  height: 5rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2rem solid ${p => (p.active ? colors.gold : "transparent")};
  font-weight: normal;
`

const Information = styled.div`
  padding: 0 1.5rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 0.1rem solid ${colors.borderColorLight};
`

const ArrowIcon = styled.img`
  transform: rotate(90deg);
  width: 0.8rem;
  margin-left: 1rem;
`

const Description = styled.div`
  padding: 2.5rem 1.5rem;
  line-height: 1.47;
`

export default ({ pageContext: { hairdresser } }) => {
  const {
    name,
    rating,
    reviews,
    address,
    zip,
    city,
    openingHours,
    phone,
    www,
    description,
  } = hairdresser

  return (
    <>
      <Hero>
        <Header>
          <Link to="/hairdressers">
            <BackIcon type="arrow-white" />
          </Link>
          <Icon type="heart" />
        </Header>
        <Details>
          <div>
            <Name>{name}</Name>
            <Rating
              theme="light"
              size="large"
              rating={rating}
              reviews={reviews}
            />
          </div>
        </Details>
      </Hero>
      <Tabs>
        <Tab active>Info</Tab>
        <Tab>Schema</Tab>
      </Tabs>
      <Information>
        <Row>
          <InfoIcon type="pin" />
          {address}, {zip} {city}
        </Row>
        <Row>
          <InfoIcon type="clock" />
          Öppet till {openingHours} idag <ArrowIcon type="arrow" />
        </Row>
        <Row>
          <InfoIcon type="phone" />
          {phone}
        </Row>
        <Row>
          <InfoIcon type="globe" />
          {www}
        </Row>
      </Information>
      <Description>{description}</Description>
    </>
  )
}

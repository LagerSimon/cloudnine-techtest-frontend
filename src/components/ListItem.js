import React from "react"
import styled from "styled-components"

import Rating from "../components/Rating"
import ArrowIcon from "../icons/arrow.svg"

const ListItem = styled.li`
  display: flex;
  padding: 2rem 0;
  border-bottom: 0.1rem solid #eee;
`

const Time = styled.p`
  padding: 0.5rem 1.5rem;
`

const Details = styled.div`
  flex: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.h2`
  margin: 0 0 1rem;
`

const Price = styled.p`
  padding: 0.5rem 1.5rem;
`

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Duration = styled.p`
  color: #656565;
  font-size: 1.1rem;
  padding: 0.5rem 1.5rem;
`

const Address = styled.p`
  margin-top: 1rem;
  color: #666666;
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
`

export default ({
  hairdresser: {
    time,
    title,
    price,
    currency,
    rating,
    reviews,
    duration,
    address,
  },
}) => (
  <ListItem>
    <Time>{time}</Time>
    <Details>
      <Header>
        <Name>{title}</Name>
        <Price>
          {price} {currency}
        </Price>
      </Header>
      <AdditionalInfo>
        <Rating rating={rating} reviews={reviews} />
        <Duration>{duration}</Duration>
      </AdditionalInfo>
      <Address>{address}</Address>
    </Details>
    <Arrow>
      <img alt="" src={ArrowIcon} />
    </Arrow>
  </ListItem>
)

import React from "react"
import styled from "styled-components"

import StarIcon from "../icons/star.svg"
import StarIconFilled from "../icons/star-filled.svg"

const Rating = styled.div`
  display: flex;
`

const Icon = styled.img`
  width: 1rem;
  margin-right: 0.3rem;
`

const ReviewsCount = styled.span`
  color: #656565;
  font-size: 1.1rem;
  margin-left: 0.5rem;
`

export default ({ rating, reviews }) => (
  <Rating>
    {[...Array(5)].map((e, i) => (
      <Icon key={i} src={i < rating ? StarIconFilled : StarIcon} />
    ))}
    <ReviewsCount>({reviews})</ReviewsCount>
  </Rating>
)

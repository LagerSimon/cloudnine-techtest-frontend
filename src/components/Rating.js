import React from "react"
import styled from "styled-components"
import { colors } from "../constants"
import Icon from "../components/Icon"

const Rating = styled.div`
  display: flex;
`

const Star = styled(Icon)`
  width: ${p => (p.size === "small" ? "1rem" : "1.3rem")};
  margin-right: 0.4rem;
`

const ReviewsCount = styled.span`
  color: ${p => (p.theme === "dark" ? colors.lightGrey : colors.white)};
  font-size: ${p => (p.size === "small" ? "1.1rem" : "1.3rem")};
  margin-left: 0.5rem;
`

export default ({ theme, size, rating, reviews }) => (
  <Rating>
    {[...Array(5)].map((e, i) => (
      <Star size={size} key={i} type={i < rating ? "star-filled" : "star"} />
    ))}
    <ReviewsCount theme={theme} size={size}>
      ({reviews})
    </ReviewsCount>
  </Rating>
)

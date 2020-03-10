import React from "react"
import styled from "styled-components"
import ListItem from "../components/ListItem"

import ArrowIcon from "../icons/arrow.svg"
import FilterIcon from "../icons/filter.svg"

const Container = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 5rem;
  border-bottom: 0.1rem solid #b69f58;
`

const BackArrow = styled.img`
  transform: rotate(180deg);
  width: 1.2rem;
`

const FilterButton = styled.img`
  width: 1.8rem;
`

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 5rem;
  border-bottom: 0.1rem solid #b69f58;
`

const Range = styled.div``

const SelectArrow = styled.img`
  transform: rotate(90deg);
`

const List = styled.ul`
  padding: 0 1.5rem;
  margin: 0;
  list-style: none;
`

export default ({ pageContext: { hairdressers } }) => {
  return (
    <Container>
      <Header>
        <BackArrow src={ArrowIcon} />
        <h1>Hår</h1>
        <FilterButton src={FilterIcon} />
      </Header>
      <Filter>
        <Range>Pris 250 - 500 kr</Range>
        <SelectArrow src={ArrowIcon} />
      </Filter>
      <List>
        {hairdressers.map(hairdresser => (
          <ListItem key={hairdresser.slug} hairdresser={hairdresser} />
        ))}
      </List>
    </Container>
  )
}

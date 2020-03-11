import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../constants"
import ListItem from "../components/ListItem"
import Icon from "../components/Icon"

const Container = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 5rem;
  border-bottom: 0.1rem solid ${colors.gold};
`

const BackArrow = styled(Icon)`
  transform: rotate(180deg);
  width: 1.4rem;
`

const FilterButton = styled(Icon)`
  width: 1.8rem;
`

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid ${colors.gold};
  position: relative;
  padding: 0 1.5rem;
`

const Select = styled.select`
  flex: 1;
  height: 5rem;
`

const SelectArrow = styled(Icon)`
  position: absolute;
  right: 1.5rem;
  transform: rotate(90deg);
`

const List = styled.ul`
  padding: 0 1.5rem;
`

const EmptyResult = styled.p`
  text-align: center;
  padding: 2rem;
`

export default ({ pageContext: { hairdressers } }) => {
  const [listItems, setListItems] = useState(hairdressers)
  const [range, setRange] = useState(["0", "1250"])

  useEffect(() => {
    setListItems(
      hairdressers
        .filter(
          item =>
            item.price >= parseInt(range[0], 10) &&
            item.price <= parseInt(range[1], 10)
        )
        .sort(function(a, b) {
          return a.price - b.price
        })
    )
  }, [hairdressers, range])

  return (
    <Container>
      <Header>
        <BackArrow type="arrow" />
        <h1>Hår</h1>
        <FilterButton type="filter" />
      </Header>
      <Filter>
        Pris:
        <Select
          value={range.join()}
          onChange={e => setRange(e.target.value.split(","))}
        >
          <option value="0, 1250">Visa alla</option>
          <option value="0, 250">0 - 250 kr</option>
          <option value="250, 500">250 - 500 kr</option>
          <option value="500, 750">500 - 750 kr</option>
          <option value="750, 1000">750 - 1000 kr</option>
          <option value="1000, 1250">1000 - 1250 kr</option>
        </Select>
        <SelectArrow type="arrow" />
      </Filter>
      <List>
        {listItems.length ? (
          listItems.map(item => (
            <Link key={item.slug} to={item.slug}>
              <ListItem hairdresser={item} />
            </Link>
          ))
        ) : (
          <EmptyResult>Inga salonger hittades</EmptyResult>
        )}
      </List>
    </Container>
  )
}

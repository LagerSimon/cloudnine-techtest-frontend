import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../constants"
import Icon from "../components/Icon"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Button = styled.button`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  margin: 1rem;
  border: 0.1rem solid;
  font-size: 1.5rem;
  text-transform: uppercase;
  outline: none;
`

const Github = styled(Button)`
  background: none;
  color: ${colors.gold};

  img {
    transform: rotate(180deg);
    margin-right: 1rem;
  }
`

const Demo = styled(Button)`
  background: ${colors.gold};
  color: ${colors.white};
  border: none;

  img {
    margin-left: 1rem;
  }
`

export default () => (
  <Container>
    <div>
      <a
        href="https://github.com/LagerSimon/cloudnine-techtest-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github>
          <Icon type="arrow" />
          Github
        </Github>
      </a>
      <Link to="/hairdressers">
        <Demo>
          Live demo
          <Icon type="arrow-white" />
        </Demo>
      </Link>
    </div>
  </Container>
)

import React from 'react'
import styled from 'styled-components'

export const Head = () => {

    const Container = styled.div`
        margin: 15%;
    `

    const Header = styled.header`
        display: flex;
        position: relative;
        justify-content: center;
        font-size: 80px;
    `
    

  return (
      <Container>
        <Header>The Rick and Morty API</Header>
      </Container>
      )
}

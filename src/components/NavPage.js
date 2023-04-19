import React from 'react'
import styled from 'styled-components'

export const NavPage = (props) => {

    const Container = styled.div `
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding: 50px;
    `

    const Button = styled.button`
        border-radius: 10px;
        width: 150px;
        height: 50px;
        font-size: 20px;
    `

  return (
    <Container>
        <Button onClick={() => props.setPage(props.page - 1 )} > Back Page: {props.page - 1 } </Button>
        <Button onClick={() => props.setPage(props.page + 1 )} > Next Page: {props.page + 1 } </Button>
    </Container>
  )
}

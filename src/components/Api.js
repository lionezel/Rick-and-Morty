import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { NavPage } from './NavPage';

export default function Api() {

  const Container = styled.div`
    margin: 10px;
    background-color: #111;
  `

  const Card = styled.div`
    float: left;
    height: 200px;
    border: 1px solid #111;
    width: 500px;
    margin: 5px;
    position: relative;
    display: flex;
    border-radius: 10px;
    margin-left: 100px;
  `

  const Img = styled.img`
    width: 40%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  `

  const Stats = styled.h1`
    font-size: 100%;
    padding-left: 3%;
    font-weight: normal;
    
  `

  const Title = styled.div`
    font-size: 30px;
  `

    const [personajes, setPersonajes] = useState([]);
    const [isLoadig, setIsLoadig] = useState (true)
    const [page, setPage] = useState (1)
    

    useEffect (() => {
      async function fetchData() {
        const response = await fetch (`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setPersonajes(data.results)
        setIsLoadig(false)
        console.log(personajes)
  
      }
      fetchData();
    }, [page]);
  
    if (isLoadig) return "Cargando..."

    if (!isLoadig && personajes.length === 0 ) return "not found"
  
    return (
      <>
        <NavPage page={page} setPage={setPage} />
      <Container>
        {
          personajes.map (personaje => {
            return(
              <Card>
                <Img src={personaje.image} />
                <Stats>
                   <Title>{personaje.name}</Title> <br/>
                    {personaje.status}<br/>
                    {personaje.species}<br/>
                    {personaje.type}<br/>
                    {personaje.gender}
                </Stats>
             </Card>
            )
          })
        }
      </Container>
      </>
    );
}

import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Api() {

    const Card = styled.div`
        float: left;
        margin: 10px;
    `

    const [personajes, setPersonajes] = useState([]);

    useEffect (() => {
      async function fetchData() {
        const response = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setPersonajes(data.results)
        console.log(personajes)
  
      }
      fetchData();
    }, []);
  
  
    return (
      <div className="App">
        {
          personajes.map (personaje => {
            return(
              <Card>
                <h2>{personaje.name}</h2>
                <img src={personaje.image} />
              </Card>
            )
          })
        }
      </div>
    );
}

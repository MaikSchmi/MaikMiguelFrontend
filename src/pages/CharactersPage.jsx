import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getCharacters = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/eldenring/characters");
      setCharacters(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching characters: ", error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return isLoading ? <h1>Loading data ...</h1> : (
    <>
      <div>
          {characters.map(character => {
            return (
              <ul key={character._id}>
                <li>Name: {character.name}</li>
                <Link to={`/eldenring/characters/details/${character._id}`}><button type="button">See Details</button></Link>
              </ul>
            )
          })}
      </div>
    </>
  )
}

export default CharactersPage

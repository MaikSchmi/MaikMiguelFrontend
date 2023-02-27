import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CharacterDetails() {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { charId } = useParams();
    const navigate = useNavigate();

    const getCharacter = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/eldenring/characters/details/${charId}`);
            setCharacter(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log("Error fetching character: ", character);
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5005/api/eldenring/characters/delete/${charId}`);
            navigate("/eldenring/characters/");
        } catch (error) {
            console.log("Error deleting Char: ", error);
        }
    }

    useEffect(() => {
        getCharacter();
    }, [])

  return isLoading ? <h1>Loading details...</h1> : (
    <div>
        <ul>
            <li>Name: {character.name} </li>
            <li>Vigor: {character.vigor}</li>
            <li>Mind: {character.mind}</li>
            <li>Endurance: {character.endurance}</li>
            <li>Strength: {character.strength}</li>
            <li>Dexterity: {character.dexterity}</li>
            <li>Intelligence: {character.intelligence}</li>
            <li>Faith: {character.faith}</li>
            <li>Arcane: {character.arcane}</li>
            <li>Weapon: {character.weapon}</li>
            <Link to={`/eldenring/characters/update/${character._id}`}><button type="button">Update Details</button></Link>
            <button type="button" onClick={handleDelete}>Delete</button>
        </ul>
    </div>
  )
}

export default CharacterDetails

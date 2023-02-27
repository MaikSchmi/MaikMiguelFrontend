import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateCharacter() {

  const [name, setName] = useState("");
  const [vigor, setVigor] = useState(0);
  const [mind, setMind] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [faith, setFaith] = useState(0);
  const [arcane, setArcane] = useState(0);
  const [weapon, setWeapon] = useState("");

  const { charId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCharacterDetails = {name, vigor, mind, endurance, strength, dexterity, intelligence, faith, arcane, weapon};
    try {
        await axios.put(`http://localhost:5005/api/eldenring/characters/update/${charId}`, updatedCharacterDetails);
        navigate(`/eldenring/characters/details/${charId}`)
    } catch (error) {
        console.log("Error updating character: ", error);
    }
  }

  const getCharDetails = async () => {
    try {
        const response = await axios.get(`http://localhost:5005/api/eldenring/characters/details/${charId}`);
        const {name, vigor, mind, endurance, strength, dexterity, itelligence, faith, arcane, weapon} =  response.data;
        setName(name)
        setVigor(vigor)
        setMind(mind)
        setEndurance(endurance)
        setStrength(strength)
        setDexterity(dexterity)
        setIntelligence(itelligence)
        setFaith(faith)
        setArcane(arcane)
        setWeapon(weapon)
    } catch (error) {
        console.log("Error getting update character details: ", error);
    }
  }

  useEffect(() => {
    getCharDetails();
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <label>Name:<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Vigor:<input value={vigor} onChange={(e) => setVigor(e.target.value)} /></label>
        <label>Mind:<input value={mind} onChange={(e) => setMind(e.target.value)} /></label>
        <label>Endurance:<input value={endurance} onChange={(e) => setEndurance(e.target.value)} /></label>
        <label>Strength:<input value={strength} onChange={(e) => setStrength(e.target.value)} /></label>
        <label>Dexterity:<input value={dexterity} onChange={(e) => setDexterity(e.target.value)} /></label>
        <label>Intelligence:<input value={intelligence} onChange={(e) => setIntelligence(e.target.value)} /></label>
        <label>Faith:<input value={faith} onChange={(e) => setFaith(e.target.value)} /></label>
        <label>Arcane:<input value={arcane} onChange={(e) => setArcane(e.target.value)} /></label>
        <label>Weapon:<input value={weapon} onChange={(e) => setWeapon(e.target.value)} /></label>
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default UpdateCharacter

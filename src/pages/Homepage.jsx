import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <Link to="/eldenring/characters">See all characters here!</Link>
      <Link to="/eldenring/characters/new">Create a new character!</Link>
    </>
  )
}

export default Homepage

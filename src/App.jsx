import { Route, Routes } from 'react-router-dom'
import './App.css'
import CharacterDetails from './pages/CharacterDetails'
import CharactersPage from './pages/CharactersPage'
import Homepage from './pages/Homepage'
import NewCharacter from './pages/NewCharacter'
import UpdateCharacter from './pages/UpdateCharacter'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}>Home</Route>
      <Route path="/eldenring/characters" element={<CharactersPage />}></Route>
      <Route path="/eldenring/characters/details/:charId" element={<CharacterDetails />}></Route>
      <Route path="/eldenring/characters/update/:charId" element={<UpdateCharacter />}></Route>
      <Route path="/eldenring/characters/new" element={<NewCharacter />}>Create Character</Route>
      <Route path="*" element={<h1>Error 404 - Not Found</h1>}></Route>
    </Routes>
    </>
  )
}

export default App

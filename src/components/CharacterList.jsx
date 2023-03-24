import { useState, useEffect } from 'react'
import axios from 'axios'
import "../assets/styles/components/CharacterList.scss"
import Character from './Character'
import Loader from './Loader'
import Error from './Error'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getCharacters = async() => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      const result = response.data.results
      setCharacters(result)
      setLoading(false)
      setError(false)
    } catch(error) {
      setLoading(true)
      setError(true)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      {
        loading 
        ? <Loader /> 
        : error 
          ? <Error /> 
          : (
            characters.map(item => <Character key={item.id} data={item} />)
          )
      }
    </div>
  )
}

export default CharacterList
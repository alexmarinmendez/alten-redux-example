import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import "../assets/styles/components/Character.scss"
import CharacterDetail from './CharacterDetail'
import Modal from './Modal'

const Character = (props) => {
  const [modal, setModal] = useState(false)
  const [favorite, setFavorite]  = useState(false)

  const { data } = props
  const { id, image, name, status, gender, species } = data
  
  const handleCloseModal = () => {}
  const handleOpenModal = () => {}
  const handleSetFavorite = () => {}
  const handleDeleteFavorite = () => {}

  useEffect(() => {

  }, [])

  return (
    <div className='character'>
      <img className='character__img' src={image} alt="" />
    </div>
  )
}

export default Character
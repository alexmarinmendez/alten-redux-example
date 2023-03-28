import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import "../assets/styles/components/Character.scss"
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg"
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
      <div className='character__details'>
        <h2 className='character__details-name'>
          {name}
        </h2>
        {
          favorite 
          ? <SVGStar
              onClick={() => handleDeleteFavorite(id)}
              className="character__details-star favorite"
            /> 
          : <SVGStar 
              onClick={() => handleSetFavorite(id)}
              className="character__details-star nofavorite"
          />
        }
        <p className='character_details__item'>
          <span className='character__details__item-type'>Status: </span>{status}
        </p>
        <p className='character_details__item'>
          <span className='character__details__item-type'>Species: </span>{species}
        </p>
        <p className='character_details__item'>
          <span className='character__details__item-type'>Gender: </span>{gender}
        </p>
        <p 
          onClick={handleOpenModal}
          className='character__details__item-more'>More details...
        </p>
      </div>

      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
      </Modal>

    </div>
  )
}

export default Character
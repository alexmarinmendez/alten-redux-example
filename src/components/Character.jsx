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

  const { data, favoriteCharacters } = props
  const { id, image, name, status, gender, species } = data
  
  const handleCloseModal = () => {
    setModal(false)
  }

  const handleOpenModal = () => {
    setModal(true)
  }
  
  const handleSetFavorite = () => {
    props.setFavorite({ data })
    setFavorite(true)
  }

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
    setFavorite(false)
  }

  const isFavorite = () => {
    const result = favoriteCharacters.filter(item => item.data.id === id)
    if (result.length) {
      setFavorite(true)
    }
  }

  useEffect(() => {
    isFavorite()
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
              onClick={handleSetFavorite}
              className="character__details-star noFavorite"
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

// react-redux native with HOC
const mapStateToProps = state => {
  return {
    favoriteCharacters: state.favoriteCharacters,
    // sectionActive: state.sectionActive,
  }
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)
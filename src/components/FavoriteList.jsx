import { connect } from 'react-redux'
import "../assets/styles/components/FavoriteList.scss"

const FavoriteList = (props) => {
  const { favoriteCharacters } = props

  return (
    <div>FavoriteList</div>
  )
}

const mapStateToProps = state => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  }
}

export default connect(mapStateToProps, null)(FavoriteList)
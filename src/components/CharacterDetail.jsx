import "../assets/styles/components/CharacterDetail.scss"

const CharacterDetail = (props) => {
  const { data } = props
  const { image, name, status, species, gender, origin, location, episode} = data

  return (
    <div className="characterDetail">
      <img src={image} alt="" />
    </div>
  )
}

export default CharacterDetail
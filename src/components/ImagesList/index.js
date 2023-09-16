import './index.css'

const ImagesList = props => {
  const {each, activeMatchId} = props
  const {id, imageUrl, thumbnailUrl} = each

  const onClickToggleMatchId = () => {
    activeMatchId(id)
  }
  return (
    <li className="item-container">
      <button onClick={onClickToggleMatchId} className="btn" type="button">
        <img src={thumbnailUrl} className="image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesList

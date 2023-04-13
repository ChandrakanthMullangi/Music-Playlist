import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {eachTrack, onClickDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = eachTrack

  const clickOnDeleteIcon = () => {
    onClickDeleteIcon(id)
  }

  return (
    <li className="track-container">
      <div className="track-image-category-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="track-category">
          <p className="track-name"> {name} </p>
          <p className="track-genre"> {genre} </p>
        </div>
      </div>
      <div className="track-duration-delete-container">
        <p className="track-duration"> {duration} </p>
        <button
          type="button"
          onClick={clickOnDeleteIcon}
          className="delete-button"
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem

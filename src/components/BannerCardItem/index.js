// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {sourceItem} = props
  const {headerText, description, className} = sourceItem

  return (
    <li className={className}>
      <div>
        <h1 className="cards-heading">{headerText}</h1>
        <p className="cards-description">{description}</p>
        <button type="button" className="cards-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem

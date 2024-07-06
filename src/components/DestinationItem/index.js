import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem

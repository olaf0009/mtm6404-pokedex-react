import { Link } from 'react-router-dom'

function ItemCard (props) {
  const item = props.item

  return (
    <div className="col col-6 col-md-4 col-lg-3 mb-3">
      <div className="card text-center">
        <div className="card-body">
          <img className="img-fluid" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`} alt={item.name} />
        </div>
        <div className="card-footer text-muted text-capitalize">
            {item.name}
        </div>
      </div>
    </div>
  )
}

export default ItemCard
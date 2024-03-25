import './style.css'
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { img, title, description, clickAdd, clickRemove, id, price, stock } = props
  return (

    <div className="card-container">
      <div className="image-container">
        <img src={img} alt='product' />
      </div>
      <div className="title">{title}</div>
      <div className="product-price">{price}$ left {stock} units</div>
      <div className="description">{description}</div>
      <div className="button-container">
        <button className="add-button" onClick={clickAdd}>{<NavLink className="product-navlink" to={`/product/${id}`}>Product Details</NavLink>}</button>
        <button className="remove-button" onClick={() => { clickRemove(id) }}>Remove</button>
      </div>
    </div>

  )
}

export default Card;
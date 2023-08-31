import { Button } from '@mui/material'; // Import Button component

function ItemDetail({ item, onClose, onAddToBasket }) {
  return (
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>X</button>
      <img src={item.image} alt={item.title} style={{ width: '200px' }} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <div>
        <p>Rating: {item.rating.rate} (from {item.rating.count} reviews)</p>
      </div>
      <Button variant="contained" color="primary" onClick={() => onAddToBasket(item)}>
        Add to Basket
      </Button>
    </div>
  );
}

export default ItemDetail;

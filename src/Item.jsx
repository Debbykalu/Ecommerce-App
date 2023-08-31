import { useState } from "react";
const Item = ({ item, onClick }) => {
  const { title, price, description, category, image, rating } = item; // Destructure from item
  const [readMore, setReadMore] = useState(false);
  const shortDescription = description
    ? readMore
      ? description
      : description.substr(0, 100) + '...'
    : '';

  return (
    <div className="card" onClick={() => onClick(item)}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{shortDescription}
          <span className="read-more" onClick={(e) => { setReadMore(!readMore); e.stopPropagation(); }}>
            {readMore ? 'Read less' : 'Read more'}
          </span>
        </p>
        <div className="d-flex justify-content-between">
          <strong>${price}</strong>
          <div>
            <span>Rating: {rating.rate} ({rating.count} reviews)</span><br />
            <span>Category: {category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

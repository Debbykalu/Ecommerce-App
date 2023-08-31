import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemList = ({ searchTerm }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



 useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error('An error occurred:', error);
        setItems([]);
      });
  }, []);

  return (
    <div className="container">
      <div className="item-container">
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onClick={handleItemClick} 
          />
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="item-detail-title"
        aria-describedby="item-detail-description"
      >
        <div className="modal-content">
          {selectedItem && <ItemDetail item={selectedItem} onClose={handleClose} />}
        </div>
      </Modal>
    </div>
  );
};

export default ItemList;

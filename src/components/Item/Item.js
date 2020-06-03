import React, { useState } from 'react';
import { Card, Button } from '@material-ui/core';

import './Item.scss';

const Item = props => {
  const [showButton, setShowButton] = useState(false);

  const getButtonLabel = () => {
    if (props.showFavorite) {
      return <div>Remove from favorites</div>
    } else if (props.isFavorite && !props.showFavorite) {
      return <div>Remove from favorites</div>
    } else {
      return <div>Add to favorites</div>
    }
  }

  const getButtonAction = () => {
    if (props.showFavorite) {
      props.removeFavorites(props.product.id)
    } else if (props.isFavorite && !props.showFavorite) {
      props.removeFavorites(props.product.id)
    } else {
      props.setFavorites(props.product)
    }
  }

  return (
    <div className="item-container">
      <Card 
        className="card-container"
        onMouseEnter={() => setShowButton(!showButton)}
        onMouseLeave={() => setShowButton(!showButton)}
      >
        <img
          className="item-img"
          src={props.product.variant_images[0].attachment_url_medium} 
          alt={props.product.variant_images[0].attachment_url_medium} 
        />
        <div className="product-name">{props.product.name}</div>
        {
          showButton &&
          <Button 
            onClick={getButtonAction}
            variant="outlined" 
            className="favorites-button"
          >
           {getButtonLabel()}
          </Button>
        }
      </Card>
    </div>
  )
}

export default Item;
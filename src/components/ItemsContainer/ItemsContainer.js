import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Item from '../Item';

import './ItemsContainer.scss';

const ItemsContainer = props => {
  const getFavorites = id => {
    return !!props.favorites.find(item => item.id === id)
  }

  return (
    <div className="items-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className="category-name" variant="h5">
            {props.item.name}
          </Typography>
        </Grid>  
        {props.item.products.map((product, index) => (
          <Grid key={index} item lg={4} md={6} xs={12}>
            <Item 
              isFavorite={getFavorites(product.id)}
              product={product}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ItemsContainer;
import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import Item from '../Item';

import './Favorites.scss';

const Favorites = props => {
  if (!props.favorites.length) {
    return <div className="no-favorites">There are no favorites yet.</div>
  }

  return (
    <div className="favorites-container">
      <Typography className="title" variant="h5">
        Favorites
      </Typography>
      <div className="favorite-items">
        <Grid container spacing={2}>
          {props.favorites.map((favorite, index) => (
            <Grid key={index} item lg={4} md={6} xs={12}>
              <Item 
                showFavorite
                key={index} 
                product={favorite} 
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Favorites;
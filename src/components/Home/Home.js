import React, { useEffect } from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import ItemsContainer from '../ItemsContainer';

import './Home.scss';

const Home = props => {
  useEffect(() => {
    !props.items.length && props.fetchItems();
  }, []);

  return (
    <div className="home-container">
      <Backdrop style={{zIndex:1201}} open={props.isLoading}>
      <CircularProgress color="inherit" size={70} />
      </Backdrop>
      <Grid container alignItems="center" spacing={2}>
        {
          props.items.map((item, index) => (
            <Grid key={index} item lg={12} md={12} xs={12}>
              <ItemsContainer item={item} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Home;
import Item from './Item';
import { connect } from 'react-redux';
import { setFavorites, removeFavorites } from '../../store/reducers/common';

const mapDispatchToProps = {
  setFavorites,
  removeFavorites,
}

export default connect(null, mapDispatchToProps)(Item);
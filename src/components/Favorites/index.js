import Favorites from './Favorites';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  favorites: state.common.favorites,
});

export default connect(mapStateToProps, {})(Favorites);
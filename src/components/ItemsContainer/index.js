import ItemsContainer from './ItemsContainer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  favorites: state.common.favorites,
})

export default connect(mapStateToProps, {})(ItemsContainer);
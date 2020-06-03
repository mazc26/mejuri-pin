import Home from './Home';
import { connect } from 'react-redux';

import { fetchItems } from '../../store/reducers/common';

const mapStateToProps = state => ({
  items: state.common.items,
  isLoading: state.common.isLoading,
});

const mapDispatchToProps = {
  fetchItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import FilterMenu from './FilterMenu';
import { connect } from 'react-redux';

import { fetchItems } from '../../store/reducers/common';

export default connect(null, { fetchItems })(FilterMenu);
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { loadSources, changeSelection } from './actions';

import { makeSelectSources, makeSelectSelected } from './selectors';

import reducer from './reducer';
import saga from './saga';
import SourceOptions from './SourceOptions';

const mapDispatchToProps = (dispatch) => ({
  loadSources: () => dispatch(loadSources()),
  onChangeSelection: (selected) => dispatch(changeSelection(selected))
});

const mapStateToProps = createStructuredSelector({
  sources: makeSelectSources(),
  selected: makeSelectSelected()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sources', reducer });
const withSaga = injectSaga({ key: 'sources', saga });

export default compose(withReducer, withSaga, withConnect)(SourceOptions);
export { mapDispatchToProps };


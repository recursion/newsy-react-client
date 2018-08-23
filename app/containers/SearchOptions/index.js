import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { changeSearchType, changeUseSources } from './actions';
import {
} from './constants';
import { makeSelectSearchType, makeSelectUseSources } from './selectors';
import reducer from './reducer';
import SearchOptions from './SearchOptions';

const mapDispatchToProps = (dispatch) => ({
  toggleSearchType: () => {
    dispatch(changeSearchType());
  },
  toggleUseSources: () => {
    dispatch(changeUseSources());
  }
});

const mapStateToProps = createStructuredSelector({
  advanced: makeSelectSearchType(),
  useSources: makeSelectUseSources()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchOptions', reducer });

export default compose(withReducer, withConnect)(SearchOptions);
export { mapDispatchToProps };

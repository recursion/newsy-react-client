import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { changeSearchType } from './actions';
import {
  SEARCH_TYPE_SIMPLE,
  SEARCH_TYPE_ADVANCED
} from './constants';
import { makeSelectSearchType } from './selectors';
import reducer from './reducer';
import SearchOptions from './SearchOptions';

const mapDispatchToProps = (dispatch) => ({
  toggleSearchType: (type) => {
    if (type === SEARCH_TYPE_SIMPLE) {
      dispatch(changeSearchType(SEARCH_TYPE_ADVANCED));
    } else {
      dispatch(changeSearchType(SEARCH_TYPE_SIMPLE));
    }
  }
});

const mapStateToProps = createStructuredSelector({
  searchType: makeSelectSearchType()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchOptions', reducer });

export default compose(withReducer, withConnect)(SearchOptions);
export { mapDispatchToProps };

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { changeSearchType } from './actions';
import {
} from './constants';
import { makeSelectSearchType } from './selectors';
import reducer from './reducer';
import SearchOptions from './SearchOptions';

const mapDispatchToProps = (dispatch) => ({
  toggleSearchType: () => {
    dispatch(changeSearchType());
  }
});

const mapStateToProps = createStructuredSelector({
  advanced: makeSelectSearchType()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchOptions', reducer });

export default compose(withReducer, withConnect)(SearchOptions);
export { mapDispatchToProps };

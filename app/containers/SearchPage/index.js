import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  changeSearchTerms,
  loadStories,
  getPage
} from './actions';
import {
  makeSelectQuery,
  makeSelectStories,
  makeSelectLoading,
  makeSelectLoaded,
  makeSelectError
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchPage from './SearchPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchTerms: (evt) => dispatch(changeSearchTerms(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const query = makeSelectQuery();
    if (query && query !== '') {
      dispatch(loadStories());
    }
  },
  onGetPage: (page) => dispatch(getPage(page))
});

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
  query: makeSelectQuery(),
  loading: makeSelectLoading(),
  loaded: makeSelectLoaded(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(withReducer, withSaga, withConnect)(SearchPage);
export { mapDispatchToProps };

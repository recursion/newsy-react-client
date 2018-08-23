import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { changeTarget, changeSearchType, changeUseSources, changeCountry } from './actions';
import {
} from './constants';
import {
  makeSelectSearchType,
  makeSelectCountry,
  makeSelectUseSources,
  makeSelectSearchTarget
} from './selectors';
import reducer from './reducer';
import SearchOptions from './SearchOptions';

const mapDispatchToProps = (dispatch) => ({
  toggleSearchType: () => {
    dispatch(changeSearchType());
  },
  toggleUseSources: () => {
    dispatch(changeUseSources());
  },
  onChangeCountry: (country) => {
    dispatch(changeCountry(country));
  },
  onChangeTarget: (target) => {
    dispatch(changeTarget(target));
  }
});

const mapStateToProps = createStructuredSelector({
  advanced: makeSelectSearchType(),
  useSources: makeSelectUseSources(),
  country: makeSelectCountry(),
  target: makeSelectSearchTarget()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchOptions', reducer });

export default compose(withReducer, withConnect)(SearchOptions);
export { mapDispatchToProps };

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  toggleHideAdvanced,
  changeTarget,
  changeSearchType,
  changeUseSources,
  changeCategory,
  changeCountry
} from './actions';
import {
  makeSelectSearchType,
  makeSelectCountry,
  makeSelectUseSources,
  makeSelectCategory,
  makeSelectHideAdvanced,
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
  onChangeCategory: (category) => {
    dispatch(changeCategory(category));
  },
  onChangeTarget: (target) => {
    dispatch(changeTarget(target));
  },
  toggleHideAdvanced: () => {
    dispatch(toggleHideAdvanced());
  }
});

const mapStateToProps = createStructuredSelector({
  advanced: makeSelectSearchType(),
  hideAdvanced: makeSelectHideAdvanced(),
  useSources: makeSelectUseSources(),
  country: makeSelectCountry(),
  category: makeSelectCategory(),
  target: makeSelectSearchTarget()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchOptions', reducer });

export default compose(withReducer, withConnect)(SearchOptions);
export { mapDispatchToProps };

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  changeTarget,
  changeUseSources,
  changeCategory,
  changeCountry,
  changeLanguage,
  changeFromDate,
  changeSortBy,
  changeToDate
} from './actions';
import {
  makeSelectCountry,
  makeSelectUseSources,
  makeSelectCategory,
  makeSelectLanguage,
  makeSelectSearchTarget,
  makeSelectToDate,
  makeSelectSortBy,
  makeSelectFromDate
} from './selectors';
import reducer from './reducer';
import SearchOptions from './SearchOptions';

const mapDispatchToProps = (dispatch) => ({
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
  onChangeLanguage: (lang) => {
    dispatch(changeLanguage(lang));
  },
  onChangeFromDate: (date) => {
    dispatch(changeFromDate(date));
  },
  onChangeToDate: (date) => {
    dispatch(changeToDate(date));
  },
  onChangeSortBy: (sortBy) => {
    dispatch(changeSortBy(sortBy));
  }
});

const mapStateToProps = createStructuredSelector({
  useSources: makeSelectUseSources(),
  country: makeSelectCountry(),
  category: makeSelectCategory(),
  language: makeSelectLanguage(),
  target: makeSelectSearchTarget(),
  fromDate: makeSelectFromDate(),
  toDate: makeSelectToDate(),
  sortBy: makeSelectSortBy()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchOptions', reducer });

export default compose(withReducer, withConnect)(SearchOptions);
export { mapDispatchToProps };

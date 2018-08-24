import React, { Component } from 'react';
import MultiSelect from '@khanacademy/react-multi-select';
import PropTypes from 'prop-types';
import renderSources from './SourceRenderer';
import './style.scss';
/**
 *  StatefulMultiSelect
 *
 * Renders a searchable, multi-select form dropdown
 * that will enable uses to select from multiple choices.
 * or all choices.
 *
 * */
class StatefulMultiSelect extends Component {
  componentDidMount() {
    if (this.props.sources.size === 0) {
      this.props.loadSources();
    }
  }

  render() {
    const filterOptions = (options, filter) => {
      const optionIncludesText = (option) => {
        const label = option.label || '';
        return label.toLowerCase().includes(filter.toLowerCase());
      };
      return options.filter(optionIncludesText);
    };

    const {
      ItemRenderer,
      sources,
      selectAllLabel,
      isLoading,
      disabled,
      disableSearch,
      selected,
      onChangeSelection
    } = this.props;

    return (
      <MultiSelect
        options={sources}
        onSelectedChanged={onChangeSelection}
        selected={selected.toJS()}
        valueRenderer={renderSources}
        ItemRenderer={ItemRenderer}
        selectAllLabel={selectAllLabel}
        isLoading={isLoading}
        disabled={disabled}
        disableSearch={disableSearch}
        filterOptions={filterOptions}
      />
    );
  }
}

StatefulMultiSelect.propTypes = {
  sources: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  selected: PropTypes.object,
  onChangeSelection: PropTypes.func,
  loadSources: PropTypes.func,
  ItemRenderer: PropTypes.func,
  selectAllLabel: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  disableSearch: PropTypes.bool
};

export default StatefulMultiSelect;

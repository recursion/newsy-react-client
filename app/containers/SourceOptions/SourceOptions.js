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
 *  TODO: Currently just using flux (setState) for state management
 *  but will need to move to full redux usage for state.
 * */
class StatefulMultiSelect extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
    };
    this.handleSelectedChange = this.handleSelectedChanged.bind(this);
  }

  handleSelectedChanged(selected) {
    this.setState({ selected });
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
      options,
      selectAllLabel,
      isLoading,
      disabled,
      disableSearch,
    } = this.props;
    const { selected } = this.state;

    return (
      <MultiSelect
        options={options}
        onSelectedChanged={this.handleSelectedChange}
        selected={selected}
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
  options: PropTypes.array,
  ItemRenderer: PropTypes.func,
  selectAllLabel: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  disableSearch: PropTypes.bool
};

export default StatefulMultiSelect;

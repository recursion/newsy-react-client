import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SearchOptions from 'containers/SearchOptions';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './style.scss';

export default class OptionsPanel extends Component {
  propTypes = {
    advanced: PropTypes.bool,
    toggleSearchType: PropTypes.func,
    toggleShowAdvanced: PropTypes.func,
    closeAdvanced: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isPaneOpenLeft: false
    };
    this.setElementReference = this.setElementReference.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  setElementReference(ref) {
    this.el = ref;
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.showAdvanced !== nextState.isPaneOpenLeft) {
      return {
        isPaneOpenLeft: nextProps.showAdvanced
      };
    }
    return null;
  }

  render() {
    return (
      <div ref={(ref) => this.setElementReference(ref)}>
        <div style={{ marginTop: '' }}>
          {(!this.props.advanced) &&
            <button
              className="advanced-button button is-primary is-inverted is-size-7-mobile"
              onClick={() => {
                this.setState({ isPaneOpenLeft: true });
                this.props.toggleShowAdvanced();
              }}
            >
              Advanced Options
            </button>
          }
        </div>
        <SlidingPane
          isOpen={this.state.isPaneOpenLeft}
          title="Advanced Options"
          from="left"
          width="310px"
          onRequestClose={() => {
            this.setState({ isPaneOpenLeft: false });
            this.props.closeAdvanced();
          }}
        >
          <div className="field has-text-centered">
            <label className="mode-switch" htmlFor="switchRoundedDefault">
              Simple
            </label>
            <input
              id="switchRoundedDefault"
              type="checkbox"
              name="switchRoundedSuccess"
              className="switch is-rounded is-success"
              checked={this.props.advanced}
              onChange={this.props.toggleSearchType}
            />
            <label htmlFor="switchRoundedDefault">
              Advanced
            </label>
          </div>
          {(this.props.advanced) ?
            <SearchOptions /> :
            <p>
              Advanced options can significantly alter search results, and will be used for search as long as they are turned on. You can return to simple search at any time by clicking the &apos;Use simple search&apos; button on the main page, or by returning to the advanced options panel and sliding the the slider to simple.
            </p>
          }
        </SlidingPane>
      </div>
    );
  }
}


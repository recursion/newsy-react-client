import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SearchOptions from 'containers/SearchOptions';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './style.scss';

export default class OptionsPanel extends Component {
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
          {(!this.props.advanced) ?
            <button
              className="button is-primary is-inverted is-size-7-mobile"
              onClick={() => {
                this.setState({ isPaneOpenLeft: true });
                this.props.toggleShowAdvanced();
              }}
            >
              Advanced Options
            </button> :
            ''
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
            ''
          }
        </SlidingPane>
      </div>
    );
  }
}

OptionsPanel.propTypes = {
  advanced: PropTypes.bool,
  toggleSearchType: PropTypes.func,
  toggleShowAdvanced: PropTypes.func,
  closeAdvanced: PropTypes.func
};

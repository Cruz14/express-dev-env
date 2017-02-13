
import React, { Component, PropTypes } from 'react';
import Rcslider from 'rc-slider';
import uid from 'uid';

class RangeInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: parseInt(this.props.displayVal, 10)
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleValueChangeComplete = this.handleValueChangeComplete.bind(this);
  }

  handleValueChange(value) {
    this.setState({
      value
    });
  }

  handleValueChangeComplete(value) {
    const properties = {};
    const newVal = value;
    properties[this.props.actionProperties] = newVal;
    this.props.runAction(this.props.thingId, this.props.action, properties);
  }

  render() {
    const marks = {
      60: <strong>60°F</strong>,
      65: <strong>65°F</strong>,
      70: <strong>70°F</strong>,
      75: <strong>75°F</strong>,
      80: {
        style: {
          color: '#c24849',
        },
        label: <strong>80°F</strong>,
      },
      85: <strong>85°F</strong>,
      90: <strong>90°F</strong>
    };
    return (<Rcslider
      included={false}
      dots={true}
      marks={marks}
      className={this.props.isCurrent ? 'rc-slider' : 'rc-slider-default-value'}
      max={this.props.max}
      min={this.props.min}
      value={this.state.value}
      onChange={this.handleValueChange}
      onAfterChange={this.handleValueChangeComplete}
    />);
  }

}

export default RangeInput;

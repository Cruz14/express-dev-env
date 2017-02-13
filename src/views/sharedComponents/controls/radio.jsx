
import React, { Component, PropTypes } from 'react';
import uid from 'uid';

class RadioInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.thingProp.state.value,
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      currentValue: e.currentTarget.value
    });
  }

  render() {
    return (<div>
      <input
        id="radio-input-auto" className="radio-inline__input"
        type="radio" name="fan-radio" value={'fanAuto'}
        checked={this.state.currentValue === 'fanAuto'} onChange={this.handleValueChange}
      />
      <label htmlFor="radio-input-auto" className="radio-inline__label">
        Auto
      </label>
      <input
        id="radio-input-on" className="radio-inline__input"
        type="radio" name="fan-radio" value={'fanOn'}
        checked={this.state.currentValue === 'fanOn'} onChange={this.handleValueChange}
      />
      <label htmlFor="radio-input-on" className="radio-inline__label">
        On
      </label>
      <input
        id="radio-input-cir" className="radio-inline__input" type="radio"
        name="fan-radio" value={'fanCirculate'}
        checked={this.state.currentValue === 'fanCirculate'} onChange={this.handleValueChange}
      />
      <label htmlFor="radio-input-cir" className="radio-inline__label">
        Circulate
      </label>
    </div>);
  }

}

export default RadioInput;

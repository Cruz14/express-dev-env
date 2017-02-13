
import React, { Component, PropTypes } from 'react';
import uid from 'uid';

class RadioInputMode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.currentValue,
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.clickOnElement = this.clickOnElement.bind(this);
  }

  componentWillMount() {
    const currentState = this.props.currentValue;
    console.log(currentState);
    this.changeState(currentState);
  }

  handleValueChange(e) {
    this.setState({
      currentValue: e.currentTarget.value
    });
    // const properties = {};
    // const newVal = value;
    // properties[this.props.actionProperties] = newVal;
    // this.props.runAction(this.props.thingId, this.props.action, properties);
  }

  clickOnElement(e) {
    const value = e.target.attributes['data-value'].value;
    if (value !== this.props.currentValue) {
      const properties = {};
      const newVal = value;
      properties[this.props.actionProperties] = newVal;
      this.props.runAction(this.props.thingId, this.props.action, properties);
    }
  }

  changeState(state) {
    this.state = {
      currentValue: state,
    };
  }

  render() {
    return (<div>
      <div
        className={this.props.currentValue === 'heat' ? 'radio-inline__label active' : 'radio-inline__label'}
        onClick={this.clickOnElement}
        data-value="heat"
      >
        Heat
      </div>
      <div
        className={this.props.currentValue === 'cool' ? 'radio-inline__label active' : 'radio-inline__label'}
        onClick={this.clickOnElement}
        data-value="cool"
      >
        Cool
      </div>
    </div>);
  }

}

export default RadioInputMode;

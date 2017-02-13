import React, { Component, PropTypes } from 'react';
import uid from 'uid';

class thingRow extends Component {

  static propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string,
    activePanel: PropTypes.func,
    values: PropTypes.array,
    item: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.clickOnElement = this.clickOnElement.bind(this);
  }

  clickOnElement() {
    if (this.props.activePanel) {
      this.props.activePanel(this.props.item);
    }
  }

  returnValue(obj, key) {
    if (obj[key].state.value === null) {
      return '-';
    }
    if (key === 'motion') {
      switch (obj[key].state.value) {
        case 1:
          return 'Busy';
        default:
          return 'Free';
      }
    }
    return (obj[key].state.value);
  }

  render() {
    return (<tr key={this.props.item.id} onClick={this.clickOnElement}>
      <td>{this.props.item.label}</td>
      {
        this.props.values.map(key => (
          <td key={uid()}>
            <span>{this.returnValue(this.props.item.properties, key.thingKey)}</span>
          </td>
        ), this)
      }
    </tr>);
  }
}

module.exports = thingRow;

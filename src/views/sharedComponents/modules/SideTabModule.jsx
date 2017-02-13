
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import uid from 'uid';
import $ from 'jquery';
import RangeInput from '../controls/slider';
import RadioInput from '../controls/radio';
import RadioInputMode from '../controls/radio_mode';

const style = { width: '80%', margin: 30 };

export class sideTableModule extends Component {
  static propTypes = {
    active: PropTypes.bool,
    disable: PropTypes.func,
    values: PropTypes.array,
    data: PropTypes.array,
    thing: PropTypes.object,
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { active: this.props.active };
    this.clickOnExit = this.clickOnExit.bind(this);
  }

  unmount() {
    const node = document.getElementById('sideTabModule');
    ReactDOM.unmountComponentAtNode(node);
  }

  clickOnExit() {
    this.props.disable();
    // this.unmount();
  }

  defineActionTemperature(state) {
    switch (state) {
      case 'heat':
        return 'set_heating_setpoint';
      case 'emergency_heat':
        return 'set_heating_setpoint';
      case 'cool':
        return 'set_cooling_setpoint';
      case 'emergency_cool':
        return 'set_cooling_setpoint';
      default:
        return 'idle';
    }
  }

  defineProperty(state) {
    switch (state) {
      case 'heat':
        return 'heating_setpoint';
      case 'emergency_heat':
        return 'heating_setpoint';
      case 'cool':
        return 'cooling_setpoint';
      case 'emergency_cool':
        return 'cooling_setpoint';
      default:
        return 'idle';
    }
  }

  sliderHeader(prop, action) {
    if (prop === 'idle') {
      return (<h5>
        Set temperature control
      </h5>);
    }
    return (<h5>
      {this.props.thing.actions[action].label}
    </h5>);
  }

  returnSlider(prop) {
    if (prop === 'idle') {
      return (<div>
        Thermostat mode is <b>not</b> defined
      </div>);
    }
    return (<RangeInput
      thingId={this.props.thing.id}
      actionProperties={prop}
      action={this.defineActionTemperature(this.props.thing.properties.thermostat_mode.state.value)}
      runAction={this.props.runAction}
      key={uid()}
      name={this.props.name}
      properties={this.props.properties}
      min={this.props.thing.properties[prop].type.rangeMin}
      max={this.props.thing.properties[prop].type.rangeMax}
      displayVal={this.props.thing.properties[prop].state.value}
      isCurrent={this.props.thing.properties.temperature.state.value === this.props.thing.properties.temperature.state.value}
    />);
  }

  render() {
    if (this.props.thing.id) {
      const property = this.defineProperty(this.props.thing.properties.thermostat_mode.state.value);
      const action = this.defineActionTemperature(this.props.thing.properties.thermostat_mode.state.value);
      return (<div id="sideTabModule" className={`module module-side-panel detailed ${this.props.active === false ? 'ng-hide' : ''}`}>
        <div className="content-holder">
          <header className="light-blue pointer header-sidepanel" onClick={this.clickOnExit}>
            <span className="title"><i className="fa fa-chevron-left fa-lg "></i> BACK TO ALL THERMOSTATS</span>
          </header>
          <div className="content">
            <div style={style}>
              <h4>{this.props.thing.label}</h4>
            </div>
            <div style={style}>
              <h5>Fan</h5>
              <RadioInput
                currentValue={this.props.thing.properties.thermostat_fan_mode.state.value}
                thingProp={this.props.thing.properties.thermostat_fan_mode}
                thing={this.props.thing}
                propertie={'thermostat_fan_mode'}
                runAction={this.props.runAction}
              />
            </div>
            <div style={style}>
              <h5>Thermostat Mode</h5>
              <RadioInputMode
                currentValue={this.props.thing.properties.thermostat_mode.state.value}
                thingProp={this.props.thing.properties.thermostat_mode}
                thing={this.props.thing}
                actionProperties={'thermostat_mode'}
                thingId={this.props.thing.id}
                propertie={'thermostat_mode'}
                runAction={this.props.runAction}
                action={'set_thermostat_mode'}
              />
            </div>
            <div style={style}>
              {
                this.sliderHeader(property, action)
              }
              {
                this.returnSlider(property)
              }
            </div>
          </div>
        </div>
      </div>);
    }
    return (<div />);
  }
}

export default sideTableModule;

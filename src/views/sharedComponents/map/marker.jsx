import React, { Component, PropTypes } from 'react';
import L from 'leaflet';
import uid from 'uid';
import { Marker, Popup } from 'react-leaflet';
// PowerIcons
import powerGreen from './images/PowerGREEN.png';
import powerRed from './images/PowerRED.png';
import upsGreen from './images/UPSGREEN.png';
import upsRed from './images/UPSRED.png';
// ThermostatIcons
import thermoRed from './images/ThermoRED.png';
import thermoBlue from './images/ThermoBLUE.png';
import thermoGrey from './images/ThermoGREY.png';
// OccupancyIcons
import occupBlue from './images/Occupancy.png';
import gifIcon from './images/gif_icon.gif';
import occupRed from './images/OccupancyRED.png';
import auth from '../../../utils/AuthService';

const MapIcon = L.Icon.extend({
  options: {
    iconSize: [25, 25],
    popupAnchor: [0, -20]
  }
});

const yx = L.latLng;
const xy = (x, y) => {
  if (L.Util.isArray(x)) {
    return yx(x[1], x[0]);
  }
  return yx(y, x);
};

const cssIcon = L.divIcon({
  // Specify a class name we can refer to in CSS.
  className: 'css-icon',
  html: '<div class="gps_ring"></div>',
  iconSize: [40, 40]
  // ,iconAnchor: [11,11]
});

function returnRute(element) {
  const elementRoute = `${auth.mainRoute()}${element.substr(1)}`;
  return elementRoute;
}

const powerIconGreen = new MapIcon({ iconUrl: returnRute(powerGreen) });
const powerIconRed = new MapIcon({ iconUrl: returnRute(powerRed) });
const upsIconGreen = new MapIcon({ iconUrl: returnRute(upsGreen) });
const upsIconRed = new MapIcon({ iconUrl: returnRute(upsRed) });
const thermoIconRed = new MapIcon({ iconUrl: returnRute(thermoRed) });
const thermoIconGrey = new MapIcon({ iconUrl: returnRute(thermoGrey) });
const thermoIconBlue = new MapIcon({ iconUrl: returnRute(thermoBlue) });
const occupIconBlue = new MapIcon({ iconUrl: returnRute(occupBlue) });
const occupIconRed = new MapIcon({ iconUrl: returnRute(occupRed) });

class MarkerComp extends Component {
  static propTypes = {
    thing: PropTypes.object,
    parent: PropTypes.string,
    draggable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      thing: this.props.thing,
      draggable: this.props.draggable,
      refComp: 'marker'
    };
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentWillUpdate(update) {
    // console.log(update);
  }

  returnIcon(parent, thing) {
    switch (parent) {
      case 'power':
        switch (thing.thingType.name) {
          case 'ups':
            return upsIconGreen;
          case 'power_meter':
            return powerIconGreen;
          default:
            return powerIconGreen;
        }
      case 'rooms':
        if (thing.properties.motion.state.value === 1) {
          return occupIconRed;
        }
        if (thing.properties.motion.state.value === 2) {
          return gifIcon;
        }
        return occupIconBlue;
      case 'thermostat':
        if (thing.properties.thermostat_operating_state.state.value === 'cooling') {
          return thermoIconBlue;
        }
        if (thing.properties.thermostat_operating_state.state.value === 'heating') {
          return thermoIconRed;
        }
        if (!thing.properties.thermostat_operating_state.state.value) {
          return thermoIconGrey;
        }
        return thermoIconGrey;
      default:
        return occupIconBlue;
    }
  }

  popupInfo(thing, key) {
    let label = thing.properties[key].label;
    let value = thing.properties[key].state.value;
    if (key === 'motion') {
      label = 'Occupied';
      if (value === 1) {
        value = 'Busy';
      }
      else {
        value = 'Free';
      }
    }
    return (<span key={uid()}>
      <b>{label}:</b> {value}
      <br />
    </span>);
  }

  returnLocation(thing) {
    const location = JSON.parse(thing.meta.location);
    return xy(location.x, location.y);
  }

  updatePosition(event) {
    const { lat, lng } = this.refs.marker.leafletElement._latlng;
    // console.log(this.refs.marker);
    console.log(this.refs.marker);
    console.log({ lat, lng });
    // console.log(this.refs.marker);
  }

  render() {
    const draggable = this.props.draggable;
    return (<Marker
      key={this.state.thing.id}
      draggable={draggable}
      onDragend={this.updatePosition}
      position={this.returnLocation(this.state.thing)}
      icon={this.returnIcon(this.props.parent, this.state.thing)}
      ref={this.state.refComp}
    >
      <Popup>
        <span>
          <b className="tooltip-head">{this.state.thing.label}</b> <br />
          {
            Object.keys(this.state.thing.properties).map(key => (
              this.popupInfo(this.state.thing, key)
            ), this)
          }
        </span>
      </Popup>
    </Marker>);
  }

}

export default MarkerComp;


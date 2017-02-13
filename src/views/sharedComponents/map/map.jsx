import React, { Component, PropTypes } from 'react';
import L from 'leaflet';
import uid from 'uid';
import { Map, Popup, ImageOverlay } from 'react-leaflet';
import Marker from './marker';
import './leaflet_styles.scss';
import './style.scss';
import mapImg from './images/cr-map-2.png';
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
import occupRed from './images/OccupancyRED.png';
import auth from '../../../utils/AuthService';

const yx = L.latLng;
const xy = (x, y) => {
  if (L.Util.isArray(x)) {
    return yx(x[1], x[0]);
  }
  return yx(y, x);
};

function returnRute(element) {
  const elementRoute = `${auth.mainRoute()}${element.substr(1)}`;
  return elementRoute;
}

const bounds = [[0, 0], [2431, 4470]];

const southWest = L.latLng(1000, 1000);
const northEast = L.latLng(1000, 1000);
// const bounds = L.latLngBounds(southWest, northEast);

const position = [1215, 2235];
class MapComp extends Component {
  static propTypes = {
    things: PropTypes.array,
    parent: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      things: this.props.things,
      editMarkersPos: false
    };
    this.toggleDragMarker = this.toggleDragMarker.bind(this);
  }

  returnLegend(parent) {
    switch (parent) {
      case 'rooms':
        return (<div className="leaflet-top leaflet-right info legend">
          <div><img role="presentation" src={returnRute(occupBlue)} /> Free</div><br />
          <div><img role="presentation" src={returnRute(occupRed)} /> Busy</div>
        </div>);
      case 'power':
        return (<div className="leaflet-top leaflet-right info legend">
          <div><img role="presentation" src={returnRute(powerGreen)} /> Normal state</div><br />
          <div><img role="presentation" src={returnRute(powerRed)} /> Alarm state</div><br />
          <div><img role="presentation" src={returnRute(upsGreen)} /> UPS normal state</div><br />
          <div><img role="presentation" src={returnRute(upsRed)} /> UPS alarm state</div>
        </div>);
      case 'thermostat':
        return (<div className="leaflet-top leaflet-right info legend">
          <div><img role="presentation" src={returnRute(thermoRed)} /> Heating</div><br />
          <div><img role="presentation" src={returnRute(thermoBlue)} /> Cooling</div><br />
          <div><img role="presentation" src={returnRute(thermoGrey)} /> Idle</div>
        </div>);
      default:
        return '';
    }
  }

  createMarker(thing) {
    if (thing.meta.location) {
      return (<Marker
        thing={thing}
        parent={this.props.parent}
        key={thing.id}
        draggable={this.state.editMarkersPos}
      />);
    }
    console.log(`The thing ${thing.id} hasn't a location`);
    return '';
  }

  toggleDragMarker() {
    const state = this.state.editMarkersPos;
    this.setState({ editMarkersPos: !this.state.editMarkersPos });
  }

  toggleDragBtn() {
    if (this.state.editMarkersPos) {
      return (<div className="leaflet-bottom leaflet-right">
        <div className="leaflet-bar leaflet-control control-drag" onClick={this.toggleDragMarker}>
          <div className="lock_tooltip">
            Lock edit markes
          </div>
          <i className="fa fa-unlock-alt" aria-hidden="true" />
        </div>
      </div>);
    }
    return (<div className="leaflet-bottom leaflet-right">
      <div className="leaflet-bar leaflet-control control-drag" onClick={this.toggleDragMarker}>
        <div className="lock_tooltip">
          Edit markes location
        </div>
        <i className="fa fa-lock" aria-hidden="true" />
      </div>
    </div>);
  }

  render() {
    return (<div id="map" >
      {
        this.returnLegend(this.props.parent)
      }
      <Map
        center={position}
        zoom={-2}
        maxZoom={0}
        minZoom={-2}
        crs={L.CRS.Simple}
        scrollWheelZoom={false}
      >
        <ImageOverlay
          url={returnRute(mapImg)}
          bounds={bounds}
        />
        {
          this.props.things.map(thing =>
            this.createMarker(thing)
          )
        }
      </Map>
      {
        this.toggleDragBtn()
      }
    </div>);
  }

}

export default MapComp;

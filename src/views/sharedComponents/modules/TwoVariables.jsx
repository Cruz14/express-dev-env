import React, { Component, PropTypes } from 'react';
import AnimatedNumber from 'react-animated-number';

export class TwoVariableModule extends Component {

  static propTypes = {
    data: PropTypes.object,
    mainValue: PropTypes.number,
    color: PropTypes.string,
  };

  render() {
    return (<div className="">
      <div className={`module ${this.props.color}`} >
        <div className="content-holder">
          <header>
            <span className="title">{this.props.data.title}</span>
          </header>
          <div className="content">
            <div className="row">
              <div className="col-md-6 col-xs-6 mainValue">
                <AnimatedNumber
                  component="text" value={this.props.mainValue}
                  style={{
                    transition: '9s ease-out',
                    transitionProperty: 'background-color, color, opacity'
                  }}
                  duration={2000}
                  formatValue={n => n.toFixed(0)}
                />
                <span>{this.props.data.unit}</span>
              </div>
              <div className="col-md-6 col-xs-6">
                <div className="sub-content">
                  <span className="data">
                    <span className="subtitle"> {this.props.data.values[0].value}</span>
                    <span className="subtitle"> { this.props.data.unit }</span>
                  </span>
                  <br />
                  <span className="title">{this.props.data.values[0].title}</span>
                  <br />
                  <span className="data">
                    <span className="subtitle"> {this.props.data.values[1].value}</span>
                    <span className="subtitle"> { this.props.data.unit }</span>
                  </span>
                  <br />
                  <span className="title">{this.props.data.values[1].title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

TwoVariableModule.defaultProps = {
  color: 'black',
  data: {
    title: 'Component without data ',
    mainValue: 0,
    unit: '',
    values: [
      { title: '', value: 0 },
      { title: '', value: 0 }
    ]
  },
  mainValue: 0,
};

export default TwoVariableModule;

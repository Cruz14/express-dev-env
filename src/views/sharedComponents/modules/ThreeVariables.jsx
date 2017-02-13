import React, { Component, PropTypes } from 'react';
import AnimatedNumber from 'react-animated-number';

export class ThreeVariableModule extends React.Component {

  render() {
    return (<div className="">
        <div className={ `module ${this.props.color} threeVariableModule` }>
          <div className="content-holder">
            <header>
              <span className="title">{this.props.data.title}</span>
            </header>
            <div className="content">
              <div className="row">
                <div className="col-md-3 col-xs-3 mainValue">
                  <AnimatedNumber component="text" value={ this.props.data.mainValueOne }
                      style={{
                          transition: '9s ease-out',
                          transitionProperty:
                              'background-color, color, opacity'
                      }}
                      duration={2000}
                      formatValue={n => n.toFixed(0)}/>
                    <span>{ this.props.data.unitOne }</span>
                </div>
                <div className="col-md-3 col-xs-3 mainValue">
                  <AnimatedNumber component="text" value={ this.props.data.mainValueTwo }
                      style={{
                          transition: '9s ease-out',
                          transitionProperty:
                              'background-color, color, opacity'
                      }}
                      duration={2000}
                      formatValue={n => n.toFixed(0)}/>
                    <span>{ this.props.data.unitTwo }</span>
                </div>
                <div className="col-md-6 col-xs-6">
                  <div className="sub-content">
                    <span className="title">{this.props.data.values[0].title}</span>
                    <br></br>
                    <span className="data">
                      <i className="fa fa-caret-up"></i>
                      <span className="subtitle"> {this.props.data.values[0].value}</span>
                      <span className="subtitle"> { this.props.data.unitTwo }</span>
                    </span>
                    <br></br>
                    <span className="title">{this.props.data.values[1].title}</span>
                    <br></br>
                    <span className="data">
                      <i className="fa fa-caret-down"></i>
                      <span className="subtitle"> {this.props.data.values[1].value}</span>
                      <span className="subtitle"> { this.props.data.unitTwo }</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeVariableModule;

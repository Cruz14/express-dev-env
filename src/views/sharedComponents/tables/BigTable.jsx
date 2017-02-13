import React, { Component, PropTypes } from 'react';
import uid from 'uid';
import moment from 'moment';

export class BigTableModule extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string,
    activePanel: PropTypes.func,
    values: PropTypes.array,
    data: PropTypes.array,
  };

  returnValue(obj, key) {
    if (key === 'severity') {
      switch (obj.data.alert[key]) {
        case 1:
          return (<i className="fa fa-circle" aria-hidden="true" />);
        case 2:
          return (<i className="fa fa-chevron-circle-up" aria-hidden="true" />);
        case 'high':
          return (<i className="fa fa-exclamation-triangle" aria-hidden="true" />);
        default:
          return '';
      }
    }
    if (key === 'name') {
      return (obj.data[key]);
    }
    if (key === 'ts') {
      return moment(obj.ts).format('MMM Do, h:mm:ss a');
    }
    return (obj.data.alert[key]);
  }

  render() {
    return (<div className="module module-side-panel">
        <div className="content-holder">
          <header>
            <span className="title">{this.props.title}</span>
            <span className="interval"> {`| ${this.props.subject}`}</span>
          </header>
          <div className="content">
            <div className="table-container pn">
              <table className="table table-hoverable">
                <thead>
                  <tr>
                    {this.props.values.map(value =>
                            (<th key={uid()} className="text-left">{value.label.toUpperCase()}</th>
                              ), this)
                          }
                  </tr>
                </thead>
                <tbody>
                  {
                  this.props.data.map(item =>
                    (<tr key={uid()}>
                      {
                        this.props.values.map(key => (
                          <td key={uid()}>
                            <span>{this.returnValue(item, key.thingKey)}</span>
                          </td>
                        ), this)
                      }
                    </tr>)
                  )
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>);
  }
}

export default BigTableModule;

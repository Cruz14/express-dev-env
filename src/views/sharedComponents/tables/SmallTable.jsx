import React, { Component, PropTypes } from 'react';
import uid from 'uid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class SmallTableModule extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string,
    activePanel: PropTypes.func,
    values: PropTypes.array,
    data: PropTypes.array,
  };

  returnValue(obj, key) {
    return (obj[key]);
  }

  render() {
    return (<div className="module module-side-panel module-small-table">
      <div className="content-holder content-holder-small">

        <header>
          <span className="title">{this.props.title}</span>
          <span className="interval"> {`| ${this.props.subject}`}</span>
        </header>
        <div className="content">
          <div className="table-container">
            <table className="table table-hoverable">
              <thead>
                <tr>
                  <th className="text-left">TIMESTAMP</th>
                  <th className="text-left">ACTION</th>
                  <th className="text-left">SENSOR</th>
                </tr>
              </thead>
              <ReactCSSTransitionGroup
                component="tbody" transitionName="aninumber"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                {
                  this.props.data.map(item =>
                    (<tr key={uid()}>
                      {
                        Object.keys(item).map(key => (
                          <td key={uid()}>
                            <span>{this.returnValue(item, key)}</span>
                          </td>
                        ), this)
                      }
                    </tr>)
                  )
                }
              </ReactCSSTransitionGroup>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default SmallTableModule;

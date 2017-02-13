import React, { Component, PropTypes } from 'react';
import uid from 'uid';
import ThingElement from './ThingElement';

export class ListThingsTable extends Component {
  static propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string,
    activePanel: PropTypes.func,
    values: PropTypes.array,
    data: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.clickOnElement = this.clickOnElement.bind(this);
  }

  componentWillUpdate() {
    // console.log(this);
  }

  clickOnElement() {
    if (this.props.activePanel) {
      this.props.activePanel();
    }
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
                  <th>NAME</th>
                  {this.props.values.map(value =>
                          (<th key={uid()} className="text-left">{value.label.toUpperCase()}</th>
                            ), this)
                        }
                </tr>
              </thead>
              <tbody>
                {
                this.props.data.map(item =>
                  <ThingElement
                    activePanel={this.props.activePanel}
                    item={item}
                    values={this.props.values}
                    key={item.id}
                  />
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

export default ListThingsTable;

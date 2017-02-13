import pureRender from 'pure-render-decorator';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import './IndexView.scss';

@pureRender
class IndexView extends Component {
  static propTypes = {
    page: PropTypes.string,
    params: PropTypes.object,
  };

  wichPage() {
    let page;
    if (this.props.params.name === undefined) {
      page = 'site';
      return page;
    }
    page = this.props.params.name;
    return page;
  }

  render() {
    const { page } = this.props;
    return (
      <section id="wrapper">
        <div id="page-content-wrapper">
          content
        </div>
      </section>
    );
  }
}

export default IndexView;

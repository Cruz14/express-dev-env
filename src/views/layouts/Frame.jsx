import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import { Link } from 'react-router';
import './_styles/main.scss';
import volteoLogo from './VolteoLogo.png';

class Frame extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
    route: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.toggleColapse = this.toggleColapse.bind(this);
    this.state = {
      hour: moment(Date.now()).format('h:mm a'),
      date: moment().format('MMM Do'),
      activeColapse: false
    };
  }

  componentDidMount() {
    setInterval(() => this.returnTime(), 60000);
  }

  returnTime() {
    this.setState({ hour: moment().format('h:mm a') });
  }

  toggleColapse() {
    this.setState({
      activeColapse: !this.state.activeColapse
    });
  }

  renderPageTitle() {
    const { page } = this.props;
    if (page === 'home') {
      return 'Dashboard';
    }
    if (page === 'login') {
      return 'Login';
    }
    return 'Dashboard';
  }

  render() {
    const { page } = this.props;

    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth,
      });
    }

    return (<div>
      <Helmet
        title="vizport"
      />
      <header>
        heamierdaer
      </header>

      { children }

    </div>
    );
  }
}

export default Frame;

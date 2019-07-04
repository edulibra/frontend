import React from 'react';
import {fetchData} from 'common';

export default (props) => {
  const config = props || {};
  const name = config.name || 'documentData';
  return (Component) => {
    return class extends React.Component {
      state = {};

      componentDidMount = async () => {
        const routeParams = this.props.routeParams || {};
        const url = config.url || config.endpoint;

        if (!url) {
          return;
        }
        const response = await fetchData(url, routeParams);
        if (response) {
          this.setState({[name]: response});
        }
      }

      render() {
        const value = this.state[name];
        const data = {[name]: value};
        return (
          <Component
            {...this.props}
            {...data}>

            {this.props.children}

          </Component>
        );
      }
    };
  };
};

import React from 'react';
import { fetchData } from 'common';

export default (props) => {
  const config = props || {};
  return (Component) => {
    return class extends React.Component {
      state = {};

      componentDidMount = async () => {
        const routeParams = this.props.routeParams || {};
        const url = config.url || config.endpoint;
        if (!url) {
          return;
        }
        const documentData = await fetchData(url, routeParams);
        if (documentData) {
          this.setState({ documentData });
        }
      }

      render() {
        return (
          <Component
            documentData={this.state.documentData || {}}
            {...this.props}
          >
            {this.props.children}
          </Component>
        );
      }
    };
  };
};

import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const ReactPlayer = Loadable({
  loader: () => import(/* webpackChunkName: "schema-form/elements/richtext" */ 'react-player'),
  loading: Loading,
});


/**
 * Created by edulibra.org@gmail.com
 * Email: edulibra.org@gmail.com
 **/
class SelectElement extends React.Component {


  render() {
    const props = { ...this.props };
    delete props.options;
    delete props.onDataEmpty;
    return (
      <ReactPlayer {...props} />
    );
  }
}

export default SelectElement;

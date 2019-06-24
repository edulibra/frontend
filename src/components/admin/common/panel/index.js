import React from 'react';
import './stylesheet.scss';

/**
 * Created by edulibra.org@gmail.com
 * Email: edulibra.org@gmail.com
 **/
class UIPanel extends React.Component {

  render() {
    const { className } = this.props;

    return (
      <div className={`${className || ''} ui-admin-panel`}>
        {this.props.children}
      </div>
    );
  }
}

export default UIPanel;

import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import './stylesheet.scss';

class LearnItem extends React.PureComponent {
  state = {};

  onTitleClick = () => {
    const { onSelect, node } = this.props;
    onSelect && onSelect(node);
  }

  render() {
    const { name, title, actions, iconType, icon, width, level, node } = this.props;
    const marginByLevel = width - 185 - 44 * (level - 1);
    return (
      <div className={`ui-learn-item ${node.selected ? 'selected' : ''}`} style={{ width: `${marginByLevel}px` }}>
        <div className="icon"><Icon type={iconType || icon} /></div>
        <div className="title" onClick={this.onTitleClick}>
          {node.selected && <Icon type="edit" />}
          {name || title}
        </div>
        <div className="action">
          {actions}
          <Icon type="plus-circle" />
        </div>
      </div>
    );
  }
}

LearnItem.propTypes = {
  iconType: PropTypes.string,
  width: PropTypes.number,
  level: PropTypes.number,
  name: PropTypes.string,
  actions: PropTypes.any,
  icon: PropTypes.any,
};
export default LearnItem;

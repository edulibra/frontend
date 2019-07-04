import React from 'react';
import PropTypes from 'prop-types';
import logo from 'themes/onchaindemy/assets/svg/logo.svg';
import edulibraLogo from 'themes/onchaindemy/assets/svg/libra.svg';
import './stylesheet.scss';

class OnchaindemyLogo extends React.Component {

  render() {
    const {className} = this.props;

    return (
      <div className={`ui-onchaindemy-logo ${className}`}>
        <img className='edulibra_logo' src={logo}/>
        <img className='libra_logo' src={edulibraLogo}/>
      </div>
    );
  }
}

OnchaindemyLogo.propTypes = {
  className: PropTypes.string
}
export default OnchaindemyLogo;


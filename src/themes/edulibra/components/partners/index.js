import React from 'react';
import LibraChina from './assets/libra-china.jpg';
import UdemyLogo from './assets/UdemyLogo.svg';
import libra from 'themes/onchaindemy/assets/svg/libra.svg';
import './stylesheet.scss';

class Partners extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'edulibra-ui-partners'}>
        <h6 className='title-panel'>Strategic partnership</h6>
        <ul className="partner-list">
          <li className='item'>
            <img src={libra}/>
          </li>
          <li className='item'>
            <img src={UdemyLogo}/>
          </li>
          <li className='item china'>
            <img src={LibraChina}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Partners;


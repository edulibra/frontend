import React from 'react';
import AcademyBox from 'themes/onchaindemy/pages/working-pages/components/academy/academy-box';
import {List, Avatar, Icon, Card} from 'antd';
import './stylesheet.scss';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);

export default (props) => {
  return <ul className='ui-academy-list'>
    {
      listData && listData.map(item => {
        return (<li className='academy-item'><AcademyBox/></li>)
      })
    }

    <li className='academy-item-empty'><AcademyBox/></li>
    <li className='academy-item-empty'><AcademyBox/></li>
    <li className='academy-item-empty'><AcademyBox/></li>
    <li className='academy-item-empty'><AcademyBox/></li>
    <li className='academy-item-empty'><AcademyBox/></li>
  </ul>
}

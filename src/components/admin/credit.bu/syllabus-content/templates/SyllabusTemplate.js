import React from 'react';
import Item from '../items';
import { syllabusContentWidth } from 'components/admin/credit.bu/common';

export default [{
  iid: 1,
  name: 'Chương 1',
  level: 1,
  title: <Item title="Chương 1" width={syllabusContentWidth} level={1} iconType="folder" />,
  expanded: true,
  children: [
    {
      iid: 2,
      name: 'Chương 2',
      level: 2,
      title: <Item title="Chương 2" width={syllabusContentWidth} level={2} iconType="folder" />,
    },
  ],
},
{
  iid: 3,
  name: 'Chương 1',
  level: 1,
  title: <Item title="Chương 1" width={syllabusContentWidth} level={1} iconType="folder" />,
  expanded: true,
  children: [
    {
      iid: 4,
      name: 'Chương 2',
      level: 2,
      title: <Item title="Chương 2" width={syllabusContentWidth} level={2} iconType="folder" />,
    },
  ],
}];

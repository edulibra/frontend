import React from 'react';
import { Link } from 'react-router-dom';
import 'react-sortable-tree/style.scss';
import { Empty, Button } from 'antd';
import { t1 } from 'i18n';

class EmptyLearningItem extends React.PureComponent {

  render() {
    const { render, iid } = this.props;
    if (!render) return null;

    return (
      <Empty
        imageStyle={{
          height: 120,
        }}
        description={
          <span>
            {
                  t1('The syllabus have no learning iteam for now. You can create new one.' +
                    ' Before create that, you can see the syllabus structure template')
                }
          </span>
        }
      >
        <Link to={`/admin/syllabus/${iid}/design/edit`}>{t1('create new one')}</Link>
      </Empty>
    );
  }
}

export default EmptyLearningItem;

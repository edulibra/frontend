import React from 'react';
import TableSchema from './list/TableSchema';
import SearchSchema from './list/SearchSchema';
import { t1 } from 'i18n';
import SearchFormList from 'schema-form/searching';

const node = 'syllabus';

class OrgList extends React.PureComponent {

  render() {
    return (
      <div>
        <SearchFormList
          {...this.props}
          searchButtonLabel={t1(`Search ${node}`)}
          node={node}
          searchSchema={SearchSchema}
          tableSchema={TableSchema}
        />
      </div>
    );
  }
}

export default OrgList;

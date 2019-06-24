import React from 'react';
import PropTypes from 'prop-types';
import { t1 } from 'i18n';

const getComponentByConfig = (themeId, configs) => {
  if (!configs || !configs[themeId]) {
    return <div>{t1('page not found')}</div>;
  }
  return configs[themeId];
};

/**
 * Created by edulibra.org@gmail.com
 * Email: edulibra.org@gmail.com
 **/
class FrontendHelperLayout extends React.Component {

  render() {
    const { themeId, config } = this.props;
    const Component = getComponentByConfig(themeId, config);

    return (
      <Component themeId={themeId} />
    );
  }
}

FrontendHelperLayout.propTypes = {
  themeId: PropTypes.string,
  config: PropTypes.array,
};

export default FrontendHelperLayout;

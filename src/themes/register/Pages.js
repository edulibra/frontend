import React from 'react';
import ThemeCodes from 'themes/register/ThemeCodes'
import onChainDemyPages from 'themes/onchaindemy/pages/register';
import edulibraPages from 'themes/edulibra/pages/register';

export default {
  [ThemeCodes.onchaindemy]: onChainDemyPages,
  [ThemeCodes.edulibra]: edulibraPages
}

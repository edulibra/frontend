import React from 'react';
import './stylesheet.scss';
import {t, t1} from "i18n";

class Banner extends React.Component {

  render() {
    return (
      <div className="ui-introduction">
        <h2 className='title'>{t1('The future of education will be change from today.')}</h2>

        <p>
          {t("If you are working in the education industry; for sure, you will see we always have a lot of systems for manage " +
            "learner, teacher, score, syllabus, online system, offline system, payment system, schedule system... Surely, you are feel" +
            " they are annoying. Let start to merge all them together. Store data to the blockchain to keep it save. The world will have " +
            "only one system. using crypto to pay for fee. keep tracking the progress, score. Validate the education processing. That is some of our works")}
        </p>
      </div>
    );
  }
}

export default Banner;

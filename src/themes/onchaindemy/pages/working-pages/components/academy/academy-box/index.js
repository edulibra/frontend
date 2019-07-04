import React from 'react';
import {t} from 'i18n';
import defaultCover from 'themes/onchaindemy/assets/images/kids_bg.png';
import './stylesheet.scss';
import {Link} from "react-router-dom";

class AcademyBox extends React.Component {

  render() {
    const data = this.props.data || {};

    return (
      <div className='academy-box'>
        <div className='image-present'>
          <Link to={`/academy/course-management/${data.iid}`}>
            <img src={defaultCover}/>
          </Link>
        </div>
        <div className='academy-detail'>
          <div className='box-title'>
            <Link to={`/academy/course-management/${data.iid}`}>
              {data.name}
            </Link>
          </div>
          <div className='box-desc'>
            {data.description || t('As a mentor of this course, you should create the describe to help the learner can get overview about your course.')}
          </div>
        </div>

      </div>
    );
  }
}

export default AcademyBox;

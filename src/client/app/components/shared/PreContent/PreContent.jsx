import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PreContent.module.scss';
import storageHelper from '../../../utils/storageHelper';

const PreContent = ({ withoutBottomLine }) => {
  const globalData = storageHelper.getData();
  if (!globalData) return false;
  return (
    <div className={styles['pre-content']}>
      <div className={withoutBottomLine ? `${styles.inner} ${styles['inner--without-bottom-line']}` : styles.inner}>
        <div className={styles.links}>
          <Link to="/blogs/1">HOME</Link>
          <span className={styles.devider} />
          {globalData && <Link to="/blog/new">CREATE BLOG</Link>}
        </div>
      </div>
    </div>
  );
};

PreContent.defaultProps = {
  withoutBottomLine: false,
};

PreContent.propTypes = {
  withoutBottomLine: PropTypes.bool,
};

export default PreContent;

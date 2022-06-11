import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PreContent.module.scss';

const PreContent = ({ withoutBottomLine }) => (
  <div className={styles['pre-content']}>
    <div className={withoutBottomLine ? `${styles.inner} ${styles['inner--without-bottom-line']}` : styles.inner}>
      <div className={styles.links}>
        <Link to="/blogs/1">HOME</Link>
        <span className={styles.devider} />
      </div>
    </div>
  </div>
);

PreContent.defaultProps = {
  withoutBottomLine: false,
};

PreContent.propTypes = {
  withoutBottomLine: PropTypes.bool,
};

export default PreContent;

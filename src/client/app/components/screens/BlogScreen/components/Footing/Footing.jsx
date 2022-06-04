import React from 'react';
import styles from './Footing.module.scss';

const Footing = () => (
  <div className={styles.footing}>
    <div className={styles.inner}>
      <nav>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/mauryasaurav">About me</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://about.medium.com/">About Medium</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/policy/9db0094a1e0f">Terms</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/policy/f03bf92035c9">Privacy</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Footing;

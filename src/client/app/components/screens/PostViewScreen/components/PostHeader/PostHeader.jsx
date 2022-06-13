import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from './PostHeader.module.scss';
import storageHelper from '../../../../../utils/storageHelper';


const PostHeader = ({ post, author }) => {
  const globalData = storageHelper.getData();

  const deleteData = () => {
    // eslint-disable-next-line no-unused-expressions
    axios.delete(`/api/posts/delete/${post.id}`).then(() => {
      window.location.href = '/';
      // eslint-disable-next-line no-sequences
    }), (error) => {
      // eslint-disable-next-line no-alert
      window.alert(error);
    };
  };

  return (
    <header className={styles['post-header']}>
      <a className="avatar avatar--big avatar--circled" href="https://blog.kentcdodds.com/@kentcdodds" target="_blank" rel="noopener noreferrer">
        <img src={author.avatarUrl} />
      </a>
      <div className={styles.text}>
        <div className={styles.title}>
          <a href="https://blog.kentcdodds.com/@kentcdodds" target="_blank" rel="noopener noreferrer">
            {author.username}
          </a>
          <button className={`btn btn--smallest ${styles.follow}`}>Follow</button>
        </div>
        <div className={styles.descr}>{author.bio}</div>
        <div className={styles.meta}>
          {post.date} · {post.readTimeEstimate}
        </div>
      </div>
      {author.id === globalData.user.id && <button onClick={deleteData} className="btn">DeleteBlog</button>}
    </header>
  );
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PostHeader;

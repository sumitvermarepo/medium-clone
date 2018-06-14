import React from 'react';

const BlogScreen = () => (
  <main className="blog-home">
    <div className="blog-header">
      <div className="overlay" />
      <div className="inner">
        <div className="text">
          <h1 className="name">Kent C. Dodds</h1>
          <h2 className="description">Let’s make awesome with JavaScript (Photo by Luca Bravo on Unsplash)</h2>
        </div>
      </div>
    </div>
    <div className="pre-content">
      <div className="inner">
        <div className="links">
          <a href="/">HOME</a>
          <span className="devider" />
          <a href="https://kentcdodds.com/links/">FIND KENT AROUND THE WEB</a>
        </div>
        <div className="actions">
          <a className="search" href="#">search</a>
          <a className="link-icon twitter" href="#">
            <svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
              <path d="M21.725 5.338c-.744.47-1.605.804-2.513 1.006a3.978 3.978 0 0 0-2.942-1.293c-2.22 0-4.02 1.81-4.02 4.02 0 .32.034.63.07.94-3.31-.18-6.27-1.78-8.255-4.23a4.544 4.544 0 0 0-.574 2.01c.04 1.43.74 2.66 1.8 3.38-.63-.01-1.25-.19-1.79-.5v.08c0 1.93 1.38 3.56 3.23 3.95-.34.07-.7.12-1.07.14-.25-.02-.5-.04-.72-.07.49 1.58 1.97 2.74 3.74 2.8a8.49 8.49 0 0 1-5.02 1.72c-.3-.03-.62-.04-.93-.07A11.447 11.447 0 0 0 8.88 21c7.386 0 11.43-6.13 11.414-11.414.015-.21.01-.38 0-.578a7.604 7.604 0 0 0 2.01-2.08 7.27 7.27 0 0 1-2.297.645 3.856 3.856 0 0 0 1.72-2.23" />
            </svg>
          </a>
          <button className="btn btn--smallest">Follow</button>
        </div>
      </div>
    </div>
    <div className="posts">

      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 21</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 14</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">Jun 1</span>
            </div>
          </div>
        </div>
      </article>

      <article className="post post--full-width">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/1000/1*mJEOJUxW51Vh-Y7cihnS0w.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 14</span>
            </div>
          </div>
        </div>
      </article>

      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 21</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 14</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">Jun 1</span>
            </div>
          </div>
        </div>
      </article>

      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 21</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">May 14</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post">
        <a className="image" href="#">
          <div className="overlay-border" />
          <img src="https://cdn-images-1.medium.com/max/400/1*bWg9ZF6pzx0vddYqAnf5FA.jpeg" />
        </a>
        <div className="text">
          <a className="text-link" href="#">
            <h3>Prop Drilling</h3>
            <p className="preview">
              What it is, why it’s good, why it’s bad, and how to avoid common problems with it
            </p>
          </a>
          <div className="meta">
            <a className="avatar avatar--small avatar--circled" href="#">
              <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9ZtET_L1852yXaDZJUo9CQ.png" />
            </a>
            <div className="sub-meta">
              <a href="#" className="author">Kent C. Dodds</a>
              <span className="date">Jun 1</span>
            </div>
          </div>
        </div>
      </article>

    </div>
    <div className="footing">
      <div className="inner">
        <nav>
          <ul>
            <li><a href="#">About kentcdodds</a></li>
            <li><a href="#">Latest Stories</a></li>
            <li><a href="#">Archive</a></li>
            <li><a href="#">About Medium</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
);

export default BlogScreen;

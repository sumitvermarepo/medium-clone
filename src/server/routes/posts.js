const express = require('express');
const sanitizeHtml = require('sanitize-html');
const _ = require('lodash');
//
const db = require('../db');

const router = express.Router();

router.get('/:id', (req, res) => {
  const post = db
    .get('posts')
    .find({ id: Number(req.params.id) })
    .value();

  if (!post) {
    res.status(404).json({ error: 'Item not found.' });
    return;
  }

  res.json(post);
});

router.get('/', (req, res) => {
  const posts = db.get('posts').value();
  res.json(posts);
});

router.patch('/:id', (req, res) => {
  const postChanges = _.cloneDeep(req.body);
  const postQuery = db
    .get('posts')
    .find({ id: Number(req.params.id) });

  const postBeforeChanges = postQuery.value();
  if (!postBeforeChanges) {
    res.status(404).json({ error: 'Item not found.' });
    return;
  }

  postChanges.contentMarkup = sanitizeHtml(postChanges.contentMarkup, {
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
    },
  });

  const postAfterChanges = postQuery
    .assign(postChanges)
    .write();

  res.json(postAfterChanges);
});

router.post('/create', async (req, res) => {
  const reqBody = { ...req.body };
  const newBlog = await createNewPosts(reqBody);
  res.json({ user: newBlog });
});

router.delete('/delete/:id', (req, res) => {
  const uid = req.params.id;
  db.get('posts')
    .remove({ id: Number(uid) })
    .write();
  /* Do actual deletion of User via ID End here!!! */
  res.redirect('/');
});

async function createNewPosts(reqBody) {
  const maxBlogId = db
    .get('posts')
    .value()
    .map(user => user.id)
    .reduce((acc, cur) => (cur > acc ? cur : acc));

  const newPosts = db.get('posts').insert({
    ...reqBody,
    id: maxBlogId + 1,
  }).write();

  return newPosts;
}


module.exports = router;

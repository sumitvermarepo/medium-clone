import React from 'react';
import RichTextEditor from 'react-rte';
import axios from 'axios';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ReduxDatePicker from '../Common/redux-datepicker';
import ReduxPrimaryInput from '../Common/redux-input';
import { required } from '../../../utils/validation';
import styles from './CreateBlogScreen.module.scss';
import storageHelper from '../../../utils/storageHelper';

const FORM_NAME = 'create-blog';

const CreateBlog_Container = (props) => {
  const { handleSubmit } = props;

  // const [publish, setPublish] = React.useState(false);
  const [contentMarkup, setContentMarkup] = React.useState(RichTextEditor.createEmptyValue());
  // eslint-disable-next-line max-len
  const [contentMarkupData, setContentMarkupData] = React.useState(RichTextEditor.createEmptyValue());

  const globalData = storageHelper.getData();

  console.log(globalData);

  const handleCreateCardSubmit = (value) => {
    console.log(value);
    const resp = {
      blogId: 1,
      userId: globalData.user.id || 1,
      title: value.title,
      subTitle: value.subTitle,
      contentMarkup: contentMarkupData,
      isLargePreview: false,
      imgDescriptor: '1*mJEOJUxW51Vh-Y7cihnS0w.jpeg',
      date: value.date,
      readTimeEstimate: value.readTimeEstimate,
    };

    // eslint-disable-next-line no-unused-expressions
    axios.post('/api/posts/create', resp).then(() => {
      window.location.href = '/';
    // eslint-disable-next-line no-sequences
    }), (error) => {
      // eslint-disable-next-line no-alert
      window.alert(error);
    };
  };


  const handleCancel = () => window.location.goBack();

  const onEditorChange = (data1) => {
    setContentMarkup(data1);
    setContentMarkupData(data1.toString('html'));
  };


  return (
    <form onSubmit={handleSubmit(handleCreateCardSubmit)}>
      <div>
        <div>
          <div className={styles.posts}>CREATE POST</div>
        </div>
        <Field
          name="title"
          component={ReduxPrimaryInput}
          label="Enter a Heading"
          validate={[required]}
        />
        <Field
          name="subTitle"
          component={ReduxPrimaryInput}
          label="Enter a Sub title"
          validate={[required]}
        />
        <Field
          name="date"
          component={ReduxDatePicker}
          validate={[required]}
        />
        <Field
          name="readTimeEstimate"
          component={ReduxPrimaryInput}
          label="Reading Time (Like - 4 Min)"
          validate={[required]}
        />

        <RichTextEditor
          value={contentMarkup}
          onChange={(value) => onEditorChange(value)}
          required
          id="body-text"
          name="contentMarkup"
          type="string"
          multiline
          variant="filled"
          style={{ minHeight: 410 }}
          className={styles.editor}
        />

        <div className={styles['button-holder']}>
          <Button
            onClick={handleCancel}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>&nbsp;&nbsp;&nbsp;
          <Button className={styles['cancel-button']} variant="contained" color="primary" type="submit">Create Blog</Button>&nbsp; &nbsp;
        </div>
      </div>
    </form>
  );
};

CreateBlog_Container.defaultProps = {
  handleSubmit: () => { },
};

CreateBlog_Container.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({ form: FORM_NAME })(CreateBlog_Container);

// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import PrimaryCkEditor from './primary-ckeditor';

// const ReduxHolder = styled.div`
// margin-bottom: 24px;
// `;

// const ReduxCkEditor = ({
//   input, id, disabled, handleOnFocus, handleOnBlur, className, tabIndex, meta, errResp,
// }) => {
//   const {
//     touched, error, active, visited,
//   } = meta;

//   return (
//     <ReduxHolder>
//       <PrimaryCkEditor
//         id={id}
//         disabled={disabled}
//         className={className}
//         tabIndex={tabIndex}
//         errClass={(((!active && (visited || touched)) && error) || !!errResp) ? 'error' : ''}
//         handleOnChange={e => input.onChange((e))}
//         handleOnFocus={e => {
//           input.onFocus(e);
//           handleOnFocus(e);
//         }}
//         handleOnBlur={e => {
//           input.onBlur();
//           handleOnBlur(e);
//         }}
//         {...input}
//       />
//       {(((!active && (visited || touched)) && error) || !!errResp) && <h5>{error}</h5>}
//     </ReduxHolder>
//   );
// };

// ReduxCkEditor.defaultProps = {
//   input: {},
//   meta: {},
//   id: '',
//   errResp: '',
//   disabled: false,
//   className: '',
//   tabIndex: '0',
// };

// ReduxCkEditor.propTypes = {
//   input: PropTypes.any,
//   meta: PropTypes.any,
//   id: PropTypes.string,
//   className: PropTypes.string,
//   tabIndex: PropTypes.string,
//   errResp: PropTypes.string,
//   disabled: PropTypes.bool,
//   handleOnFocus: PropTypes.func.isRequired,
//   handleOnBlur: PropTypes.func.isRequired,
// };

// export default ReduxCkEditor;

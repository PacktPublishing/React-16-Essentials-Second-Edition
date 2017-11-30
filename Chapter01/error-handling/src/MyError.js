import React from 'react';

const MyError = (props) => {
  if (props.err) {
    return <b style={{color: 'red'}}>{props.err}</b>;
  }

  throw new Error('epic fail');
};

export default MyError;

import React from 'react';

const landingPage = (props) => {
  if (!props.user) {
    return <p>Please login</p>
  }

  return (
    <h1>{props.user.displayName}</h1>
  );
};

export default landingPage;
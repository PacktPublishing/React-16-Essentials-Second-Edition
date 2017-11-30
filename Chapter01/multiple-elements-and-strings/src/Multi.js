import React from 'react';

const Multi = () => [
  'first sibling',
  'second sibling'
].map((v, i) => <p key={i}>{v}</p>);

export default Multi;

import React from 'react';

const Label = () => 'Name:';

const MultiWithString = () => [
  'first sibling',
  'second sibling'
].map((v, i) => <p key={i}><Label/> {v}</p>);

export default MultiWithString;

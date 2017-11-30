import React from 'react';
import Stream from './Stream';
import Collection from './Collection';

const Application = () =>(
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 text-center">
        <Stream />
      </div>
      <div className="col-md-8">
        <Collection />
      </div>
    </div>
  </div>
);

export default Application;

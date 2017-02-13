import React from 'react';
import './style.scss';

const Loader = function () {
  return (<div className="row">
    <div className="col-md-12 loader-container">
      <div className="loader-inner line-scale">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>);
};

module.exports = Loader;

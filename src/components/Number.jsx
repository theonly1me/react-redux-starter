import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Number = ({ storeNumber }) => {
  useEffect(() => {
    const timerID = setInterval(() => {
      storeNumber(Math.floor(Math.random() * 10));
    }, 10000);

    return () => {
      clearInterval(timerID);
    };
  });
  return <div>Number</div>;
};

export default connect(null, actions)(Number);

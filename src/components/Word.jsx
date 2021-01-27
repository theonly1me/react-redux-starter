import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Word = props => {
  //   console.log('Word component props', props);
  props.storeWord('Hello');
  props.getPicture();
  return (
    <div>
      <div>{props.number}</div>
      <div>
        <img src={props.imageURL} alt="unsplash" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    app: { number, imageURL },
  } = state;
  return {
    number,
    imageURL,
  };
};

export default connect(mapStateToProps, actions)(Word);

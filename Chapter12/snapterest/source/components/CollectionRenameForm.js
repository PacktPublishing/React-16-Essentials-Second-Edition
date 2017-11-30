import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Button from './Button';
import {
  setCollectionName,
  setEditingName,
  toggleIsEditingName
} from '../actions';

const inputStyle = {
  marginRight: '5px'
};

class CollectionRenameForm extends Component {
  componentDidMount() {
    this.refs.collectionName.focus();
  }

  render() {
    const {
      editingName,
      onNameChange,
      onSubmit,
      onCancel
    } = this.props;

    return (
      <form className="form-inline">
        <Header text="Collection name:" />

        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={onNameChange}
            value={editingName}
            ref="collectionName"
          />
        </div>

        <Button label="Change" handleClick={onSubmit}/>
        <Button label="Cancel" handleClick={onCancel}/>
      </form>
    );
  }
}

const mapStateToProps = state => state.collection;

const mapDispatchToProps = dispatch => ({
  onNameChange: (event) => {
    dispatch(setEditingName(event.target.value));
  },
  onSubmit: (event) => {
    event.preventDefault();
    dispatch(setCollectionName());
  },
  onCancel: (event) => {
    event.preventDefault();
    dispatch(toggleIsEditingName());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionRenameForm);

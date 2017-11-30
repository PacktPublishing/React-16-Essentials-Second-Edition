
import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';

class CollectionControls extends Component {
  state = {
    name: 'new',
    isEditingName: false
  }

  getHeaderText = () => {
    const { name } = this.state;
    const { numberOfTweetsInCollection } = this.props;
    let text = numberOfTweetsInCollection;

    if (numberOfTweetsInCollection === 1) {
      text = `${text} tweet in your`;
    } else {
      text = `${text} tweets in your`;
    }

    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  }

  toggleEditCollectionName = () => {
    this.setState(prevState => ({
      isEditingName: !prevState.isEditingName
    }));
  }

  setCollectionName = (name) => {
    this.setState({
      name: name,
      isEditingName: false
    });
  }

  render() {
    const { name, isEditingName } = this.state;
    const {
      onRemoveAllTweetsFromCollection,
      htmlMarkup
    } = this.props;

    if (isEditingName) {
      return (
        <CollectionRenameForm
          name={name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()}/>

        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}
        />

        <Button
          label="Empty collection"
          handleClick={onRemoveAllTweetsFromCollection}
        />

        <CollectionExportForm htmlMarkup={htmlMarkup}/>
      </div>
    );
  }
}

export default CollectionControls;

import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';
import CollectionActionCreators from '../actions/CollectionActionCreators';
import CollectionStore from '../stores/CollectionStore';

class CollectionControls extends Component {
  state = {
    isEditingName: false
  }

  getHeaderText = () => {
    const { numberOfTweetsInCollection } = this.props;
    let text = numberOfTweetsInCollection;
    const name = CollectionStore.getCollectionName();

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

  removeAllTweetsFromCollection = () => {
    CollectionActionCreators.removeAllTweetsFromCollection();
  }

  render() {
    const { name, isEditingName } = this.state;
    const onRemoveAllTweetsFromCollection = this.removeAllTweetsFromCollection;
    const { htmlMarkup } = this.props;

    if (isEditingName) {
      return (
        <CollectionRenameForm
          name={name}
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />

        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}
        />

        <Button
          label="Empty collection"
          handleClick={onRemoveAllTweetsFromCollection}
        />

        <CollectionExportForm htmlMarkup={htmlMarkup} />
      </div>
    );
  }
}

export default CollectionControls;

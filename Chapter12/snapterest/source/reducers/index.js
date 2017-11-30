import { combineReducers } from 'redux'
import collection from './collection';
import tweet from './tweet';

const reducers = combineReducers({
  collection,
  tweet
})

export default reducers;

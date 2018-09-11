import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer, // console.log(libraries.getState()) -> { libraries: [] }
  selectedLibraryId: SelectionReducer
});

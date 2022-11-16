import {combineReducers} from 'redux';
import UserData from './reducers/UserData';
import Input from './reducers/Input';

const RootReducer = combineReducers({
  UserData,
  Input,
});

export default RootReducer;

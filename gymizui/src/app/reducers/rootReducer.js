import { combineReducers } from 'redux';
import testReducer from '../../components/testarea/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer
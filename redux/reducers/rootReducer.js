import novelReducer from './novelReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    novelReducer: novelReducer
});

export default rootReducer;
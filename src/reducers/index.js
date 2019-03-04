import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scenarioReducer from './scenarioReducer';
import characterReducer from './characterReducer';

export default combineReducers({
    scenarios: scenarioReducer,
    characters: characterReducer,
    form: formReducer
});
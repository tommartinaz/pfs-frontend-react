import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scenarioReducer from './scenarioReducer';
import characterReducer from './characterReducer';
import alignmentReducer from './alignmentReducer';
import classReducer from './classReducer';
import raceReducer from './raceReducer';
import authReducer from './authReducer';

export default combineReducers({
    scenarios: scenarioReducer,
    characters: characterReducer,
    alignments: alignmentReducer,
    classes: classReducer,
    races: raceReducer,
    auth: authReducer,
    form: formReducer
});
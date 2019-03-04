import pfs from '../apis/pfs';
import {
    FETCH_SCENARIOS,
    FETCH_SCENARIO,
    CREATE_SCENARIO,
    EDIT_SCENARIO,
    DELETE_SCENARIO,
    FETCH_CHARACTERS,
    FETCH_CHARACTER,
    EDIT_CHARACTER,
    CREATE_CHARACTER,
    DELETE_CHARACTER
} from './types';
import history from '../history';

export const fetchScenarios = () => async dispatch => {
    const response = await pfs.get('/scenarios');
    dispatch({ type: FETCH_SCENARIOS, payload: response.data });
};

export const fetchScenario = id => async dispatch => {
    const response = await pfs.get(`/scenarios/${id}`);
    dispatch({ type: FETCH_SCENARIO, payload: response.data });
};

export const editScenario = (formValues, id) => async dispatch => {
    const response = await pfs.put(`/scenarios/${id}`, formValues);
    dispatch({ type: EDIT_SCENARIO, payload: response.data });
    history.push('/scenarios');
};

export const createScenario = formValues => async dispatch => {
    const response = await pfs.post('/scenarios', formValues);
    dispatch({ type: CREATE_SCENARIO, payload: response.data });
    history.push('/scenarios');
};

export const deleteScenario = id => async dispatch => {
    await pfs.delete(`/scenarios/${id}`);
    dispatch({ type: DELETE_SCENARIO, payload: id });
};

export const fetchCharacters = () => async dispatch => {
    const response = await pfs.get('/characters');
    dispatch({ type: FETCH_CHARACTERS, payload: response.data });
};

export const fetchCharacter = id => async dispatch => {
    const response = await pfs.get(`/characters/${id}`);
    dispatch({ type: FETCH_CHARACTER, payload: response.data });
};

export const createCharacter = formValues => async dispatch => {
    const response = await pfs.post('/characters', formValues);
    dispatch({ type: CREATE_CHARACTER, payload: response.data });
    history.push('/characters');
}

export const editCharacter = (formValues, id) => async dispatch => {
    const response = await pfs.put(`/characters/${id}`, formValues);
    dispatch({ type: EDIT_CHARACTER, payload: response.data });
    history.push('/characters');
}

export const deleteCharacter = id => async dispatch => {
    await pfs.delete(`/characters/${id}`);
    dispatch({ type: DELETE_CHARACTER, payload: id });
    history.push('/characters');
}
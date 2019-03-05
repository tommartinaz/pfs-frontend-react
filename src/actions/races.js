import pfs from '../apis/pfs';
import { FETCH_RACES } from './types';

export const fetchRaces = () => async dispatch => {
    const response = await pfs.get('/races');
    dispatch({ type: FETCH_RACES, payload: response.data });
};
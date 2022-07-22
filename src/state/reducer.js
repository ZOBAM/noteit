import * as actions from './actionTypes';
import {initialState} from './actionTypes'

 function reducer(state = initialState, action){
    let newState;
    switch(action.type){
        case actions.ADD_NOTE:
            newState = [...state, action.payload];
            saveToStorage(newState);
            return newState;
        case actions.DELETE_NOTE:
            newState = state.filter(note=>note.id !== action.payload.id);
            saveToStorage(newState)
            return newState;
        default:
            return state;
    }
}
function saveToStorage(state){
    localStorage.setItem('notes', JSON.stringify(state));
}
export {reducer};
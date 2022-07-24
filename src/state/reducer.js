import { getSavedNotes } from '../hooks/getSavedNote';
import * as actions from './actionTypes';
import {initialState} from './actionTypes'

 function reducer(state = initialState, action){
    let newState;
    switch(action.type){
        case actions.ADD_NOTE:
            let time = new Date();
            newState = [...state, {...action.payload, id: getSavedNotes(true)}];
            saveToStorage(newState);
            return newState;
        case actions.DELETE_NOTE:
            newState = state.filter(note=>note.id !== action.payload.id);
            saveToStorage(newState)
            return newState;
        case actions.SAVE_EDIT:
            newState = state.map(note=>{
                if(note.id === action.payload.id){
                    note.note = action.payload.note;
                    note.title = action.payload.title;
                    note.tags = action.payload.tags;
                }
                return note;
            });
            return newState;
        default:
            return state;
    }
}
function saveToStorage(state){
    localStorage.setItem('notes', JSON.stringify(state));
}
export {reducer};
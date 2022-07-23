import * as actionTypes from './actionTypes'

function addNote(payload){
    return {
        type: actionTypes.ADD_NOTE,
        payload
    }
}
function saveEdit(payload){
    return {
        type: actionTypes.SAVE_EDIT,
        payload
    }
}
function deleteNote(payload){
    return{
        type: actionTypes.DELETE_NOTE,
        payload
    }
}
export {addNote, deleteNote, saveEdit};
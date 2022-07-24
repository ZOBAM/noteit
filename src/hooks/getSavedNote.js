export function getSavedNotes(newID = false){
    let notes = JSON.parse(localStorage.getItem('notes'));
    let initialState = notes? notes : [];
    let nextID = initialState.length? initialState[initialState.length - 1].id + 1 : 1;

    return newID? nextID : initialState;
}
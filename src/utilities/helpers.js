export function formatDate(note){
    //TODO
    return note.createdAt? note.createdAt.substr(0,25) : "Pls, edit to get date";
}
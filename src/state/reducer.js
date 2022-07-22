import * as actions from './actionTypes';

let initialState = [
    {
        id: 1,
        title: 'Mind Your Mind',
        note: "Never take it lightly the stuffs you think about or the topics that occupies your mind. Just in the same way you are careful about what you put into your mouth heading to your stomach, you should also be careful of what enters your mind heading to your life.",
        tags: 'mind, thoughts, think'
    },
    {
        id: 2,
        title: 'Be Grateful',
        note: "We will never have it all. I repeat, we will never have it all while we are in this world. One day, we shall have it all and all desires will be more than satisfied but it is not on this side of life. I have heard people erroneously claim that somebody has it all. When I hear such, I smile and say 'According your thinking' because by the time you get to that person, you will discover that there is something he is pursuing.",
        tags: 'thanksgiving, gratefulness, gratitude'
    },
    {
        id: 3,
        title: 'Keep it real',
        note: "Don't pretend to be who you are not just to impress people around you. At the end, you will only prove one point, and that is \"Your real self is too insignificant that you are so ashamed to identify with it\".",
        tags: 'be real, no pretense, original'
    }
];
 function reducer(state = initialState, action){
    console.log(action);
    switch(action.type){
        case actions.ADD_NOTE:
            return[...state, action.payload];
        case actions.DELETE_NOTE:
            const newNotes = state.filter(note=>note.id !== action.payload.id);
            return newNotes;
        default:
            return state;
    }
}
export {reducer};
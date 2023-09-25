import { ADD_TODO,TOGGLE_TODO,DELETE_TODO } from "../actionsType/actionsType";


export const addtodo=(text)=>({
 type: ADD_TODO,   
 payload: {text},
});


export const toggletodo=(id)=>({
    type: TOGGLE_TODO,   
    payload:{id}
});


export const deletetodo=(id)=>({
    type: DELETE_TODO,   
    payload:{id}
});
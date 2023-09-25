import { ADD_TODO,DELETE_TODO,TOGGLE_TODO } from "../actionsType/actionsType";


const initialstate={

    todos:[],
};

const TodoReducer = (state=initialstate,actions)=>{
  console.log("actions",actions.type);
  // console.log("nweToDo text",actions.payload.text);
  switch (actions.type) {
    case ADD_TODO:
        
      const newTodo={
       id:Math.random(),
       text:actions.payload.text,
       completed: false,

      };
         return {...state,todos:[...state.todos,newTodo]}
         
         
         
    case TOGGLE_TODO:
       return {...state,todos:state.todos.map((todo)=>
        todo.id === actions.payload.id? {...todo,completed:!todo.completed} : todo
        
        ),};

    case DELETE_TODO:
      return {...state,todos:state.todos.filter((todo)=>todo.id !== actions.payload.id)}    

        
        
  
    default:
        return  state ;
  }

}

export default TodoReducer;
import React,{useState} from "react";
import { connect } from "react-redux";
import { addtodo } from "../actions/actions";
// import { Button } from "react-bootstrap";
const AddToDo = ({ addtodo }) => {
  // console.log(addtodo)
const [text,setText]=useState('');

  const Handilsubmit = (e)=>{
    e.preventDefault();
    if(text.trim() === '') return;
    addtodo(text);
    setText('');
  }

  return (
    <div style={{display:"flex", justifyContent:'center'}}>
      <form onSubmit={Handilsubmit}>
       <input
        type="text" 
        placeholder="ADD NEW TASK..."
        value={text}
        onChange={(e)=>setText(e.target.value)} 
        />
        <button onClick={Handilsubmit}>ADD</button>
        
        
      </form>
      
    </div>
  )
}

 const mapDispatchToProps={
  addtodo,
};

export default connect(null,mapDispatchToProps)(AddToDo);
import React, { useState } from 'react'
import {  connect } from 'react-redux'
import { toggletodo,deletetodo } from '../actions/actions'
import { Card,ListGroup,Button } from 'react-bootstrap'
const TodoList = ({todos , toggletodo , deletetodo}) => {
  const [status , setStatus] = useState("ALL")
  // console.log(todos);
  // console.log("toggletodo",toggletodo(todos.id));
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'3%'}}>
      <Button onClick={()=>setStatus("ALL")} style={{marginRight:'2%'}}>All</Button>
      <Button onClick={()=>setStatus("DONE")}>Completed</Button>
      <Button style={{marginLeft:'2%'}}onClick={()=>setStatus("Not Done")}>Not Completed</Button>
      </div>
       {/* <ul style={{display:"flex",flexDirection:'column'}}> */}
        {status === "ALL" ? todos.map((todo)=>(
          <div key={todo.id} style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
         <Card style={{ width: '18rem' }}>      
            <ListGroup variant="flush" style={{display:"flex",flexDirection:'row',justifyContent:'space-between',padding:"5px"}} >
                 <Button  variant='primary'onClick={()=>toggletodo(todo.id)}>Modify</Button>
                 <ListGroup.Item style={{textDecoration: todo.completed? 'line-through' : 'none'}}>{todo.text}</ListGroup.Item>
                <Button variant='danger' onClick={()=>deletetodo(todo.id)}>Delete</Button>
           </ListGroup>
         </Card> 
         </div>
        )): status ==="DONE" ? (todos.filter((todo)=>(todo.completed))
        .map((todo)=>(
          <div key={todo.id} style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
         <Card style={{ width: '18rem' }}>      
            <ListGroup variant="flush" style={{display:"flex",flexDirection:'row',justifyContent:'space-between',padding:"5px"}} >
                 <Button  variant='primary'onClick={()=>toggletodo(todo.id)}>Modify</Button>
                 <ListGroup.Item style={{textDecoration: todo.completed? 'line-through' : 'none'}}>{todo.text}</ListGroup.Item>
                <Button variant='danger' onClick={()=>deletetodo(todo.id)}>Delete</Button>
           </ListGroup>
         </Card> 
         </div>))):status==="Not Done" ? (todos.filter((todo)=> !todo.completed)
         .map((todo)=>(
          <div key={todo.id} style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
         <Card style={{ width: '18rem' }}>      
            <ListGroup variant="flush" style={{display:"flex",flexDirection:'row',justifyContent:'space-between',padding:"5px"}} >
                 <Button  variant='primary'onClick={()=>toggletodo(todo.id)}>Modify</Button>
                 <ListGroup.Item style={{textDecoration: todo.completed? 'line-through' : 'none'}}>{todo.text}</ListGroup.Item>
                <Button variant='danger' onClick={()=>deletetodo(todo.id)}>Delete</Button>
           </ListGroup>
         </Card> 
         </div>
         ))):(<></>)}
     </div>
   )

        //  <li key={todo.id}>
        //   <button onClick={()=>toggletodo(todo.id)}>modify</button>
        //    <span style={{textDecoration:todo.completed? 'line-through': 'none'}}>{todo.text}</span>
        //    <button onClick={()=>deletetodo(todo.id)}>Delete</button>
        //  </li>
        // ))}
      //  </ul>

}   








const mapStateToProps = (state)=>({
  todos:state.todos,

});


const mapDispatchToProps={
    toggletodo,
    deletetodo,
};

export default connect(mapStateToProps, mapDispatchToProps ) (TodoList);
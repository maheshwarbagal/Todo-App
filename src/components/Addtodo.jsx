import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function Addtodo({onNewItem}){

  const [todoName , setTodoName] = useState(''); 
  const [todoDate , setTodoDate] = useState(''); 

  const handleNameChange = (event) => {
    setTodoName( event.target.value)
  }
  
  const handleDateChange = (event) => {
    setTodoDate( event.target.value)
  }

  const handleAddButtonClicked=(event) => {
    event.preventDefault();
    onNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }


  return (
    <div className="container text-center">
      <form  className="row " onSubmit={handleAddButtonClicked}>
        <div className="col ">
          <input type="text" value={todoName} placeholder="Enter the task" onChange={handleNameChange} />
        </div>
        <div className="col ">
          <input type="date" value={todoDate} onChange={handleDateChange}/>
        </div>
        <div className="col ">
        <button className="btn btn-success" ><MdOutlineAddBox /></button>
        </div>
      </form>
      </div>
  );
}
export default Addtodo;
import AppName from "./components/AppName"
import Addtodo from "./components/Addtodo"
import ItemContainer from "./components/ItemContainer"
import {useState} from "react"
import WelcomeMessage from "./components/WelcomeMessage"

import './App.css';

function App() {
//   let initailTodoitems = [{
//     name : "Swimming",
//     dueDate : "24/12/2021"
//   },
//   {
//     name : "Driving",
//     dueDate : "10/01/2024"
//   }
// ]
  const [todoItems , setTodoItem] = useState([]);

  

  const handleNewItem = (itemName , itemDuedate) => {
    // console.log(`new item added : ${itemName} & ${itemDuedate}`);
    const newTodoItems = [...todoItems,{name:itemName , dueDate : itemDuedate}]
    setTodoItem(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    let newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItem);
    
  }

  return (
  <center className='todo-container'>
    <AppName></AppName>
    <Addtodo onNewItem={handleNewItem}></Addtodo>
    {todoItems.length === 0 && <WelcomeMessage/>}
    <ItemContainer key={todoItems} todoitems={todoItems} onDeleteClick={handleDeleteItem}></ItemContainer>      
  </center>
  )
}

export default App

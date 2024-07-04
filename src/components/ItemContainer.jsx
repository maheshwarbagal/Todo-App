import Todoitems from "./Todoitems";


const ItemContainer = ({todoitems , onDeleteClick}) => {
  return (
  <>
  
  {todoitems.map((item) => <Todoitems todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></Todoitems>)}
  
  </>
  );
}

export default ItemContainer;
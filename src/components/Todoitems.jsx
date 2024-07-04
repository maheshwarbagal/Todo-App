
import { MdDelete } from "react-icons/md";

const Todoitems = ({todoName , todoDate , onDeleteClick}) =>{
      return (
      <div className="container text-center">
          <div className="row ">
          <div className="col ">
            {todoName}
          </div>
          <div className="col ">
            {todoDate}
          </div>
          <div className="col ">
          <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(todoName)}><MdDelete /></button>
          </div>
          </div>
      </div>
      )
}
export default Todoitems;
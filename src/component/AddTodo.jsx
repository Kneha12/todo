import { useContext } from "react";
import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row ">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className="title"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" className="title" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-success n-button title"
            
            onClick={handleAddButtonClicked}
          >
            
            <IoBagAdd size={24}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
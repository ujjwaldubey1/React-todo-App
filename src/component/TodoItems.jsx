
import TodoItems from "./TodoItem";

const TodoItemss = ({ EachItem, onDelete }) => {
  return (
    <>
      <div className="items-container">

        {EachItem.map((item, index) => (
          <TodoItems key={index} todoTask={item.name} Tododate={item.dueDate} onDelete={onDelete}
          />
        ))}


      </div></>
  )
}

export default TodoItemss;
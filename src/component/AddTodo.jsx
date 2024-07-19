import { useState, useRef } from 'react';
// import { useState } from 'react';

function AddTodo({ onAddItem }) {
  const [addName, setAddName] = useState("");
  const [addDate, setAddDate] = useState("");
  const noOfUpdates = useRef(0);

  const onAddName = (event) => {
    setAddName(event.target.value);
    noOfUpdates.current++;
  }
  const onAddDate = (event) => {
    setAddDate(event.target.value);
    console.log(`No of updates are: ${noOfUpdates.current}`);
  };
  const onAddTodo = () => {
    onAddItem(addName, addDate);
    setAddDate("");
    setAddName("");

  }

  return <div>
    <div className="row kg-row">
      <div className="col-4">
        <input type="text" id="taskInput" placeholder="Add a task..." value={addName} onChange={onAddName} />
      </div>
      <div className="col-4">
        <input type="date" value={addDate} onChange={onAddDate} />
      </div>
      <div className="col-2">
        <button type="button" class="btn btn-outline-success uj-button" onClick={onAddTodo}>Add</button>
      </div>
    </div>
  </div>
}
export default AddTodo;
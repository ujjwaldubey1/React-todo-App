function TodoItems({ todoTask, Tododate, onDelete }) {


  return <div>

    <div className="row kg-row">
      <div className="col-4">
        {todoTask}
      </div>
      <div className="col-4">
        {Tododate}
      </div>
      <div className="col-2">

        <button type="button" className="btn btn-danger uj-button" onClick={() => {
          onDelete(todoTask);
        }}>Delete</button>
      </div>
    </div>


  </div>
}

export default TodoItems;
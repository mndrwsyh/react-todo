function AddTodoForm(props) {
  const { list, setList, onAddNew } = props;
  return (
    <form className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        id="listitem"
        required
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          if (listitem.value === "") {
            alert("Please add a task.");
          } else {
            onAddNew(listitem.value);
            //clear the input
            listitem.value = "";
          }
        }}
        className="btn btn-primary btn-sm rounded ms-2"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

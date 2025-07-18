function TodoItem(props) {
  const { id, name, isCompleted, onChecked, onDelete } = props;
  const taskRemove = () => {
    const confirmRemove = confirm("Are you sure you want to remove this task?");
    if (confirmRemove) {
      onDelete(id);
    }
  };

  const updateChecked = () => {
    onChecked(id, isCompleted);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button onClick={updateChecked} className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button onClick={updateChecked} className="btn btn-sm btn-light">
            <i className="bi bi-square"></i>
          </button>
        )}

        <span
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {name}
        </span>
      </div>
      <div>
        <button onClick={taskRemove} className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

//   if (isCompleted) {
//     return (
//       <li className="list-group-item d-flex justify-content-between align-items-center">
//         <div>
//           <button className="btn btn-sm btn-success">
//             <i className="bi bi-check-square"></i>
//           </button>
//           <span className="ms-2 text-decoration-line-through">{name}</span>
//         </div>
//         <div>
//           <button className="btn btn-sm btn-danger">
//             <i className="bi bi-trash"></i>
//           </button>
//         </div>
//       </li>
//     );
//   }
//   return (
//     <li className="list-group-item d-flex justify-content-between align-items-center">
//       <div>
//         <button className="btn btn-sm btn-light">
//           <i className="bi bi-square"></i>
//         </button>
//         <span className="ms-2">{name}</span>
//       </div>
//       <div>
//         <button className="btn btn-sm btn-danger">
//           <i className="bi bi-trash"></i>
//         </button>
//       </div>
//     </li>
//   );

export default TodoItem;

// return (
//     <li className="list-group-item d-flex justify-content-between align-items-center">
//       <div>
//         {isCompleted ? (
//           <button className="btn btn-sm btn-success">
//             <i className="bi bi-check-square"></i>
//           </button>
//         ) : (
//           <button className="btn btn-sm btn-light">
//             <i className="bi bi-square"></i>
//           </button>
//         )}

//         <span
//           className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
//         >
//           {name}
//         </span>
//       </div>
//       <div>
//         <button className="btn btn-sm btn-danger">
//           <i className="bi bi-trash"></i>
//         </button>
//       </div>
//     </li>
//   );

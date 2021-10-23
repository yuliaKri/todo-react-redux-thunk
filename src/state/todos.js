const initialState = {list:[]};

export function loadTodos() {
  return dispatch => {
    // for the sake of this exercise data is being returned directly - real implementation would use API
    // timeout added for realism of latency
    setTimeout(() => {
      dispatch({
        type: "LIST_TODOS",
        payload: [{id: Math.random(), name: "todo one"}, {id: Math.random(), name:"todo two"}]
      });
    }, 2000);
  };
}

export function addTodo(newTodo) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: "ADD_TODO",
        payload: newTodo
      });
    }, 2000);
  };
}

export function deleteTodo(id) {
  return (dispatch) =>
      dispatch ({
        type: "DEL_TODO",
        payload: id
      });
}

export function editTodo(id, name) {
  return (dispatch) =>
      dispatch ({
        type: "EDIT_TODO",
        payload: {id, name}
      });
}

export function todos(state=initialState, action) {

  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {id: Math.random(), name: action.payload}
      return {list: [...state.list, newTodo]};
    case "LIST_TODOS":
      return {list: action.payload};
    case "DEL_TODO":
      const newList = state.list.filter(el=>el.id !== action.payload)
      return {list: newList};
    case "EDIT_TODO":
      const editedList = state.list.map(el=>el.id === action.payload.id ? el = action.payload : el )
      return {list: editedList};

    default:
      return state;
  }
}



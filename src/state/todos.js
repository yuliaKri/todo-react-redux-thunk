export function loadTodos() {
  return dispatch => {
    // for the sake of this exercise data is being returned directly - real implementation would use API
    // timeout added for realism of latency
    setTimeout(() => {
      dispatch({
        type: "LIST_TODOS",
        payload: ["todo one", "todo two"]
      });
    }, 2000);
  };
}

export function addTodo() {
  // imagine that adding a todo is also an async operation
  setTimeout(() => {
    // TODO
  }, 2000);
}

export function todos(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // TODO
      return state;
    case "LIST_TODOS":
      state.list = action.payload;
      return state;
    default:
      return state;
  }
}

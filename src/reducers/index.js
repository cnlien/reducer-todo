export const initialState = {
  todos: [
    {
      item: "Do Task 1",
      completed: false,
      id: 1
    },

    {
      item: "Do Task 2",
      completed: false,
      id: 2
    },

    {
      item: "Do Task 3",
      completed: false,
      id: 3
    },
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state, todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };

    case "MARK_COMPLETE":
      return {
        ...state,
        task: state.todos.map(tasks => {
          if (tasks.id === action.id) {
            return {...tasks, completed: !tasks.completed};
          } else {
            return tasks;
          }
        })
      };

    case "CLEAR_COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(i=>i.completed===false)
      };

    default: return state;
  }
};

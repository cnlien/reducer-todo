export const initialState = {
  todos: [
    {
      item: "To Task Number 1",
      completed: false,
      id: 1
    },

    {
      item: "To Task Number 2",
      completed: false,
      id: 2
    },

    {
      item: "To Task Number 3",
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
    default: return state;
  }
};

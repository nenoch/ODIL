export const reducer = (
  state = {
    days: [],
    currentDay: {
      title: "",
      content: "",
      author: ""
    },
    currentUser: {
      username: "",
    }
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.data
      };
    case "LOADED":
      return {
        ...state,
        days: action.data.days,
        currentUser: action.data.currentUser
      };
    case "EDIT_DAY":
      return {
        ...state,
        currentDay: action.data
      };
    case "DELETE_DAY":
      return {
        ...state,
        days: state.days.filter(day => day._id !== action.id)
      };
    case "ADD_DAY":
      return {
        ...state,
        days: state.days.concat(action.data)
      };
    case "UPDATE_DAYS":
      console.log("action.data", action.data);
      return {
        ...state,
        days: state.days.map(d => (d._id === action.data._id ? action.data : d))
      };

    default:
      return state;
  }
};

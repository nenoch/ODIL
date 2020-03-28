export const reducer = (
  state = {
    days: [],
    currentDay: {
      title: "",
      content: "",
      author: ""
    }
  },
  action
) => {
  switch (action.type) {
    case "DAYS_LOADED":
      return {
        ...state,
        days: action.data
      };
    case "EDIT_DAY":
      return {
        ...state,
        currentDay: action.data
      };

    default:
      return state;
  }
};

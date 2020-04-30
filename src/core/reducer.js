import { handleActions } from "redux-actions";
import { ACTIONS } from "./actions";

export const defaultState = {
  days: [],
  currentDay: {
    title: "",
    content: "",
    author: "",
  },
  currentUser: {
    username: "",
  },
};

const reducers = {
  [ACTIONS.LOGIN]: (state, { payload: data }) => {
    return {
      ...state,
      currentUser: data
    };
  },
  [ACTIONS.LOADED]: (state, { payload: { days, currentUser } }) => {
    return {
      ...state,
      days: days,
      currentUser: currentUser,
    };
  },
  [ACTIONS.ADD_DAY]: (state, { payload: data }) => {
    return {
      ...state,
      days: state.days.concat(data)
    };
  },
  [ACTIONS.EDIT_DAY]: (state, { payload: data }) => {
    return {
      ...state,
      currentDay: data
    };
  },
  [ACTIONS.DELETE_DAY]: (state, { payload: id }) => {
    return {
      ...state,
      days: state.days.filter(day => day._id !== id)
    };
  },
  [ACTIONS.UPDATE_DAYS]: (state, { payload: data }) => {
    return {
      ...state,
      days: state.days.map(d => (d._id === data._id ? data : d))
    };
  },
};

export default handleActions(reducers, defaultState);

// export const reducer = (
//   state = defaultState,
//   action
// ) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         currentUser: action.data
//       };
//     case "LOADED":
//       return {
//         ...state,
//         days: action.data.days,
//         currentUser: action.data.currentUser
//       };
//     case "EDIT_DAY":
//       return {
//         ...state,
//         currentDay: action.data
//       };
//     case "DELETE_DAY":
//       return {
//         ...state,
//         days: state.days.filter(day => day._id !== action.id)
//       };
//     case "ADD_DAY":
//       return {
//         ...state,
//         days: state.days.concat(action.data)
//       };
//     case "UPDATE_DAYS":
//       return {
//         ...state,
//         days: state.days.map(d => (d._id === action.data._id ? action.data : d))
//       };

//     default:
//       return state;
//   }
// };

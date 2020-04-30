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
    userId: undefined
  },
  isLogged: false
};

const reducers = {
  [ACTIONS.LOGIN]: (state, { payload: data }) => {
    return {
      ...state,
      currentUser: data,
      isLogged: true
    };
  },
  [ACTIONS.LOADED]: (state, { payload: { days, currentUser } }) => {
    return {
      ...state,
      days: days,
      currentUser: currentUser,
      // TODO temp
      isLogged: (currentUser.username === undefined)? false : true 
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

export const reducer = (
    state = {
        days: []
    },
    action) => {
    switch(action.type) {
      case 'DAYS_LOADED':
        return {
            ...state,
            days: action.data
        };
      default:
        return state;
    }
  }
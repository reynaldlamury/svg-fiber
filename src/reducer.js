export const initialState = {
  // attractMode: false,
  deltaY: 0,
  scrollMode: false,
  currentYvalue: 0,
};

const reducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    // case 'GET_ATTRACTMODE':
    //   return {
    //     ...state,
    //     attractMode: action.value,
    //   };

    case 'GET_DELTAY':
      return {
        ...state,
        deltaY: action.value,
      };

    case 'GET_SCROLLMODE':
      return {
        ...state,
        scrollMode: action.value,
      };

    case 'GET_CURRENTY':
      return {
        ...state,
        currentYvalue: action.value,
      };

    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  attractMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ATTRACTMODE':
      return {
        ...state,
        attractMode: action.value,
      };

    default:
      return state;
  }
};

export default reducer;

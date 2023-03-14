export const initialState = {
  user: null
};

export const actionTypes = {
  SET__USER: "SET__USER"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SER_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;

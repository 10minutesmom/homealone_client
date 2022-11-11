export const SET_USER = 'SET_USER';

export const setUser = user => ({type: SET_USER, user});

const initalState = {
  user: {},
};

const userData = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default userData;

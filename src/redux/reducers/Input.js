import {Map} from 'immutable';

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const changeInput = input => ({type: CHANGE_INPUT, input});

const initialState = Map({
  input: Map({
    form: Map({
      title: '',
      location: '',
    }),
  }),
  time: Map({
    form: Map({
      day: '',
      readyTime: '',
      movingTime: '',
    }),
  }),
});

const Input = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      const {form, name, value} = action.input;
      return state.setIn([form, 'form', name], value);

    default:
      return state;
  }
};

export default Input;

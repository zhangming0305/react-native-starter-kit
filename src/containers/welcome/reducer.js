import { createAction } from 'redux-actions';

const PATH = 'WELCOME_';
export const IMG = `${PATH}IMG`;

export const actionImg = createAction(IMG);

const initialState = {
  img: '',
  text: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IMG:
      {
        return { ...state,
          img: action.payload.img,
          text: action.payload.text,
        };
      }
    default:
      return state;
  }
}


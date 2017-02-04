import { userLogin } from '../../service/userService';
import { actionChange, actionLogin } from './reducer';


export const onFieldsChange = data => (dispatch) => {
  dispatch(actionChange(data));
};

export const login = data => (dispatch) => {
  userLogin(data)
  .then((responseJson) => {
    dispatch(actionLogin(responseJson));
  });
};

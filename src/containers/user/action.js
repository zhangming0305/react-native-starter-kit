import { brandList } from '../../service/userService';
import { actionList } from './reducer';

export const fetchStartImage = () => (dispatch) => {
  brandList({})
            .then((responseJson) => {
              console.log(12323, responseJson);
              dispatch(actionList(responseJson.data));
            })
            .catch(() => {
            });
};


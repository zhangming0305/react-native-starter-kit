import {
  brandList,
} from '../../service/userService';
import {
  actionList,
  actionSearchChange,
  actionSearch,
} from './reducer';

export const fetchList = () => (dispatch) => {
  brandList({})
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

export const searchChange = value => actionSearchChange(value);


export const search = value => (dispatch) => {
  brandList({})
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

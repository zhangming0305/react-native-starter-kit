import {
  goodsList,
} from '../../service/goodsService';
import {
  actionList,
  actionSearchChange,
  actionLoading,
} from './reducer';

export const fetchList = () => (dispatch) => {
  dispatch(actionLoading());
  goodsList({})
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

export const searchChange = value => actionSearchChange(value);


export const search = value => (dispatch) => {
  goodsList({ goodsName: value })
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

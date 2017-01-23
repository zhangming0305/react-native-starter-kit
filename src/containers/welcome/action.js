import { getStartImage } from '../../service/zhihu';
import { actionImg } from './reducer';

export const fetchStartImage = () => (dispatch) => {
  getStartImage()
            .then((responseJson) => {
              dispatch(actionImg(responseJson));
            })
            .catch((error) => {
              console.error(error);
            });
};

export const hide = () => (dispatch) => {
  dispatch(actionImg());
};

export const onFormChange = data => (dispatch) => {
  dispatch(actionImg(data));
};

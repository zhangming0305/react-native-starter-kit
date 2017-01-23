import { getStartImage } from '../../service/zhihu';
import { actionImg } from './reducer';

export const fetchStartImage = cb => (dispatch) => {
  getStartImage()
            .then((responseJson) => {
              dispatch(actionImg(responseJson));
              setTimeout(cb, 1500);
            })
            .catch(() => {
              setTimeout(cb, 1500);
            });
};


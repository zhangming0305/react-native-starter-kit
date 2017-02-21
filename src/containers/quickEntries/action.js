import {
  actionCheck,
  actionSave,
} from './reducer';

export const onEntryCheck = data => actionCheck(data);

export const saveEntries = data => (dispatch) => {
  dispatch(actionSave(data));
};

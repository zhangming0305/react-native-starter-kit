import { url, form2Form, mFetch } from './utils';


export const goodsList = form => mFetch('/erp/goods_list.htm', form);

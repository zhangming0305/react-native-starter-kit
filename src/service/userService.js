import { url, form2Form, mFetch } from './utils';

export const userLogin = (form) => {
  form.isMobile = true;
  form.login_role = 'SELLER';
  const formData = form2Form(form);
  return fetch(`${url}/app_login.htm`, {
    credentials: 'same-origin',
    method: 'POST',
    body: formData,
  })
    .then(response => response.json());
};

export const brandList = form => mFetch('/erp/goods_list.htm', form);

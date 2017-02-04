const form2Form = (form) => {
  const formData = new FormData();
  const keys = Object.keys(form);
  keys.forEach((key) => {
    formData.append(key, form[key]);
  });

  return formData;
};
export const userLogin = form => fetch('https://news-at.zhihu.com/api/4/start-image/1080*1776', {
  credentials: 'same-origin',
  method: 'POST',
  body: form2Form(form),
})
    .then(response => response.json());


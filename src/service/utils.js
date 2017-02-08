export const url = 'http://192.168.1.197';

export const form2Form = (form) => {
  const formData = new FormData();
  const keys = Object.keys(form);
  keys.forEach((key) => {
    formData.append(key, form[key]);
  });
  return formData;
};

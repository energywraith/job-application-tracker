export default (name) => {
  let LS_TOKEN;

  try {
    LS_TOKEN = JSON.parse(localStorage.getItem(name));
  } catch (error) {
    LS_TOKEN = null;
  }

  return LS_TOKEN;
};

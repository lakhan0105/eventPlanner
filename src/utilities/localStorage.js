// addToLS
export const addToLS = (name, data) => {
  return localStorage.setItem(name, JSON.stringify(data));
};

// removeLS
export const removeLS = (name) => {
  return localStorage.removeItem(name);
};

// getLS
export const getLS = (name) => {
  const result = JSON.parse(localStorage.getItem(name));
  return result ? result : null;
};

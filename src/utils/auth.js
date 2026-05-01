// get logged user
export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

export const parseAuthToken = () => {
  const token = checkAuthToken();
  if (!token) return { username: undefined, userId: undefined };
  const parsedToken = JSON.parse(window.atob(token.split(".")[1]));
  const userName = parsedToken.name;
  const id = parsedToken.id;
  return { username: userName, userId: id };
};

export const checkAuthToken = () => {
  return localStorage.getItem("auth-token");
};

export const clearAuthToken = () => {
  localStorage.removeItem("auth-token");
  return;
};

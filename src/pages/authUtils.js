export const parseAuthToken = () => {
  const token = checkAuthToken();
  if (!token) return { username: undefined };
  const parsedToken = JSON.parse(window.atob(token.split(".")[1]));
  const userName = parsedToken.name;
  return { username: userName };
};

export const checkAuthToken = () => {
  return localStorage.getItem("auth-token");
};

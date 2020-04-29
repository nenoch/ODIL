export const parseAuthToken = () => {
  const token = localStorage.getItem("auth-token");
  if (!token) return { username: undefined };
  const parsedToken = JSON.parse(window.atob(token.split(".")[1]));
  const userName = parsedToken.name;
  return { username: userName };
};

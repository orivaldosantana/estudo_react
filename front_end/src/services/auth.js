export const TOKEN_KEY = "iot_token";
export const isAuthenticated = () =>{ 
  return localStorage.getItem(TOKEN_KEY) !== null;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  console.log("logouuuut")
  localStorage.removeItem(TOKEN_KEY);
};
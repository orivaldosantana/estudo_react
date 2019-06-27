export const TOKEN_KEY = "iot_token";
export const isAuthenticated = () =>{
  console.log(localStorage.getItem(TOKEN_KEY));  
  return localStorage.getItem(TOKEN_KEY) !== null;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  console.log(token);
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const TOKEN_KEY = "iot_token";
export const USER_NAME_KEY = "userName"; 
export const isAuthenticated = () =>{ 
  return localStorage.getItem(TOKEN_KEY) !== null;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_NAME_KEY);
};

export const getUserName = () => {
  return localStorage.getItem(USER_NAME_KEY);
};

export const setUserName = userName => {
  localStorage.setItem(USER_NAME_KEY, userName);
};
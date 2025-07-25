export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!getToken();

export const logout = () => {
  localStorage.removeItem('token');
};
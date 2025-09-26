// import api from "./api";

// export const loginUser = async (credentials) => {
//   if (credentials.email === "admin@test.com" && credentials.password === "admin123") {
//     return { token: "fake-jwt-token", user: { name: "Admin", email: credentials.email } };
//   }
//   throw new Error("Invalid credentials");
// };

// export const fetchUsers = async () => {
//   return [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   ];
// };

import api from './api';

export const getAllUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);
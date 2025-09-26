
// import api from "./api";

// export const fetchProducts = async () => {
//   return [
//     { id: 1, name: "Laptop", price: 1200 },
//     { id: 2, name: "Phone", price: 800 },
//   ];
// };
import api from './api';

export const getAllProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const createProduct = (productData) => api.post('/products', productData);
export const updateProduct = (id, productData) => api.put(`/products/${id}`, productData);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
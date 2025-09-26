// // productService.js
// // Business logic for product management (e.g., data manipulation, validation)

// const validateProduct = (product) => {
//   if (!product.name || product.name.length < 3) {
//     return { success: false, message: "Product name must be at least 3 characters." };
//   }
//   if (typeof product.price !== "number" || product.price <= 0) {
//     return { success: false, message: "Price must be a positive number." };
//   }
//   return { success: true };
// };

// export { validateProduct };
import { fetchProducts } from "../api/productApi";

export const getProducts = async () => {
  return await fetchProducts();
};

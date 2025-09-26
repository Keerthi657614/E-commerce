// export const login = async (email, password) => {
//   // Dummy login for now
//   if (email === "admin@test.com" && password === "admin123") {
//     localStorage.setItem("authToken", "dummy-token");
//     return { success: true };
//   }
//   return { success: false, message: "Invalid credentials" };
// };

// export const logout = () => {
//   localStorage.removeItem("authToken");
// };

// export const isAuthenticated = () => {
//   return !!localStorage.getItem("authToken");
// };

// Dummy auth service
// Dummy authentication
export const login = (email, password) => {
  // Simulating a successful login for the admin user
  if (email === "admin@example.com" && password === "password123") {
    localStorage.setItem("token", "dummy-token");
    return { success: true, message: "Login successful" };
  } else {
    // Simulating a failed login
    return { success: false, message: "Invalid email or password" };
  }
};

export const register = (email, password) => {
  console.log("Registered:", email);
  // This function would typically make a real API call
  return { success: true, message: "Registration successful" };
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};

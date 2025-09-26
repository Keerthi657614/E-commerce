// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
// // import LoginPage from "./components/auth/LoginPage";
// // import SignupPage from "./components/auth/SignupPage";
// // import Dashboard from "./components/admin/Dashboard";
// // import AddProduct from "./components/products/AddProduct";
// // import ProductList from "./components/products/ProductList";
// // import UserList from "./components/users/UserList";
// // import UserForm from "./components/users/UserForm";
// // import Footer from "./components/common/Footer"; // import your Footer
// // import { isAuthenticated } from "./services/authService";

// // // Private route wrapper
// // const PrivateRoute = () => {
// //   return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
// // };

// // // Layout for authenticated pages
// // const Layout = () => (
// //   <div className="app-layout">
// //     {/* You can add Header here if needed */}
// //     <Outlet />
// //     <Footer />
// //   </div>
// // );

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public routes */}
// //         <Route path="/login" element={<LoginPage />} />
// //         <Route path="/signup" element={<SignupPage />} />

// //         {/* Private routes with layout */}
// //         <Route element={<PrivateRoute />}>
// //           <Route element={<Layout />}>
// //             {/* Short routes */}
// //             <Route path="/dashboard" element={<Dashboard />} />
// //             <Route path="/products" element={<ProductList />} />
// //             <Route path="/add-product" element={<AddProduct />} />
// //             <Route path="/users" element={<UserList />} />
// //             <Route path="/add-user" element={<UserForm />} />

// //             {/* Admin routes */}
// //             <Route path="/admin/dashboard" element={<Dashboard />} />
// //             <Route path="/admin/products" element={<ProductList />} />
// //             <Route path="/admin/add-product" element={<AddProduct />} />
// //             <Route path="/admin/users" element={<UserList />} />
// //             <Route path="/admin/add-user" element={<UserForm />} />
// //           </Route>
// //         </Route>

// //         {/* Default route */}
// //         <Route path="/" element={<Navigate to="/login" />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
// import LoginPage from "./components/auth/LoginPage";
// import SignupPage from "./components/auth/SignupPage";
// import Dashboard from "./components/admin/Dashboard";
// import AddProduct from "./components/products/AddProduct";
// import ProductList from "./components/products/ProductList";
// import UserList from "./components/users/UserList";
// import UserForm from "./components/users/UserForm";
// import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// // Corrected import path
// import AdminLayout from "./components/admin/AdminLayout";
// import { isAuthenticated } from "./services/authService";

// const PrivateRoute = () => {
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />

//         <Route element={<PrivateRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="products" element={<ProductList />} />
//             <Route path="add-product" element={<AddProduct />} />
//             <Route path="users" element={<UserList />} />
//             <Route path="add-user" element={<UserForm />} />
//           </Route>
//         </Route>

//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { useContext } from "react";
import { AuthContext } from "./services/context/AuthContext";
import axios from "axios";
import { useState, useEffect } from "react";

export function App(){
    const {user, loggedIn, handleLogin, logout } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async() => {
        console.log(username, password);
        let response = await axios.post("http://localhost:8000/api/token/", {
            username,
            password
        });
        if(response.status === 200){
            let token = response.data.token;
            handleLogin(username, token);
            alert("Login successful");
        }else{
            alert("Login failed");
        }
    };

    const  handleLogout = () => {
        logout();
        alert("Logged out");
    }
    return <>
        <h1>Home Page</h1>
        <h1>{user}</h1>
        <h1>{loggedIn}</h1>


        <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>


        <button onClick={login}>Login</button>
        <button onClick={handleLogout}>Logout</button>


        { loggedIn && 
            <>
                <h2>Welcome, {user}</h2>
                <Products></Products>
            </>
        }
    </>
}

function Products() {
    const [products, setProducts] = useState([]);
    const { token, user } = useContext(AuthContext);

    const getProducts = async() => {

        console.log("Fetching products with token:", token);
        let response = await axios.get("http://localhost:8000/api/products/", {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        if(response.status === 200){
            setProducts(response.data);
        }
        else{
            alert("Failed to fetch products");
            console.log(response);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    
    return <>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            </>
}
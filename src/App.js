import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./pages/Admin/dashboard";
import Product from "./pages/Admin/Product";
import Order from "./pages/Admin/Order";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>}/> 
    <Route path="/product" element={<Product/>}/> 
    <Route path="/order" element={<Order/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

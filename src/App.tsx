import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";
import "../src/css/App.css";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import EmployeeLoginPage from "./pages/EmployeeLoginPage";
import EmployeesViewPage from "./pages/EmployeesViewPage";
import EmployeeViewFood from "./pages/EmployeeViewFood";
import CheckoutPage from "./pages/CheckoutPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/food/:id" element={<FoodPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/emplogin" element={<EmployeeLoginPage />}></Route>
          <Route path="/empview" element={<EmployeesViewPage />}></Route>
          <Route path="/foodview" element={<EmployeeViewFood />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/addemployee" element={<AddEmployeePage />}></Route>
          <Route path="/updateemployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

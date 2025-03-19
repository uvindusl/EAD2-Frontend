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
import AddFood from "./pages/AddFood";
import UpdateFood from "./pages/UpdateFood";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/food/:id" element={<FoodPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/admin" element={<EmployeeLoginPage />}></Route>
          <Route
            path="/admin/view/employees"
            element={<EmployeesViewPage />}
          ></Route>
          <Route
            path="/admin/view/foods"
            element={<EmployeeViewFood />}
          ></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route
            path="/admin/add/employee"
            element={<AddEmployeePage />}
          ></Route>
          <Route
            path="/admin/update/employee/:id"
            element={<UpdateEmployee />}
          />
          <Route path="/admin/add/food" element={<AddFood />} />
          <Route path="/admin/update/food/:id" element={<UpdateFood />} />
          <Route path="/admin/dashboard" element={<EmployeeDashboard />} />
          <Route path="/Payment" element={<PaymentPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

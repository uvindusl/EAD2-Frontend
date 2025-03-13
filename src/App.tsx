import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";
import "../src/css/App.css";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import EmployeeLoginPage from "./pages/EmployeeLoginPage";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/food/:id" element={<FoodPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/emplogin" element={<EmployeeLoginPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

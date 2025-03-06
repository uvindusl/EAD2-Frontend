import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";
import "../src/css/App.css";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/food" element={<FoodPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

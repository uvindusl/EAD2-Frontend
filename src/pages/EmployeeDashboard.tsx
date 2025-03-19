import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import "../css/EmployeeDashboard.css";
import { useNavigate } from "react-router-dom";

interface DashboardTile {
  title: string;
  description: string;
  icon: string;
  route: string;
}

const EmployeeDashboard: React.FC = () => {
  const [searchTerm] = useState("");
  const navigate = useNavigate();

  const dashboardTiles: DashboardTile[] = [
    {
      title: "Manage Foods",
      description: "Update and Delete Foods",
      icon: "🍕",
      route: "/employee/view/foods",
    },
    {
      title: "Manage Employees",
      description: "Update and Delete Employees",
      icon: "👨‍🍳",
      route: "/employee/view/employees",
    },
    {
      title: "View Orders",
      description: "",
      icon: "📦",
      route: "/employee/view/orders",
    },
  ];

  const filteredTiles = dashboardTiles.filter(
    (tile) =>
      tile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tile.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <main className="container mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Employee Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTiles.map((tile, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
              onClick={() => navigateTo(tile.route)}
            >
              <div className="p-6">
                <div className="text-3xl mb-2">{tile.icon}</div>
                <h3 className="font-bold text-lg mb-2">{tile.title}</h3>
                <p className="text-gray-600">{tile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmployeeDashboard;

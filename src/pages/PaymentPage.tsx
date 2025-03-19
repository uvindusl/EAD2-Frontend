import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import PaymentCard from "../components/PaymentCard";
import "../css/PaymentPage.css";

function PaymentPage() {
  return (
    <div>
      <NavBar />
      <div className="payment-page-container">
        <PaymentCard />
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;

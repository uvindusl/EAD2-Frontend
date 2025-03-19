import "../css/PaymentCard.css";

interface PaymentCardProps {
  totalAmount: number;
}

function PaymentCard({ totalAmount }: PaymentCardProps) {
  return (
    <div>
      <div className="card">
        <div className="header">
          <h1>Proceed Payment</h1>
        </div>
        <div className="pic-grid">
          <div className="sub-card visa">
            <img
              className="img-container visa"
              src="../src/assets/363_Visa_Credit_Card_logo-512.webp"
              alt="visa"
            />
          </div>
          <div className="sub-card mastercard">
            <img
              className="img-container mastercard"
              src="../src/assets/R.png"
              alt="mastercard"
            />
          </div>
          <div className="sub-card paypal">
            <img
              className="img-container paypal"
              src="../src/assets/paypal-logo-transparent-free-png.webp"
              alt="paypal"
            />
          </div>
          <div className="sub-card">
            <img
              className="img-container cash"
              src="../src/assets/Cash.jpg"
              alt="cash on delivery"
            />
          </div>
        </div>
        <div className="price">
          <h1>Total: Rs. {totalAmount}</h1>
        </div>
        <div className="text">
          <p>*Card payments may charge additional bank charges.</p>
          <p>*Cash on delivery available</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;

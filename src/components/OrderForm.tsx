import styled from "styled-components";

const OrderForm = () => {
  return (
    <StyledWrapper>
      <div className="master-container">
        <div className="card cart">
          <label className="title">Your cart</label>
          <div className="products">
            <div className="product">
              <svg
                fill="none"
                viewBox="0 0 60 60"
                height={60}
                width={60}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#FFF6EE" rx="8.25" height={60} width={60} />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.25"
                  stroke="#FF8413"
                  fill="#FFB672"
                  d="M34.2812 18H25.7189C21.9755 18 18.7931 20.5252 17.6294 24.0434C17.2463 25.2017 17.0547 25.7808 17.536 26.3904C18.0172 27 18.8007 27 20.3675 27H39.6325C41.1993 27 41.9827 27 42.4639 26.3904C42.9453 25.7808 42.7538 25.2017 42.3707 24.0434C41.207 20.5252 38.0246 18 34.2812 18Z"
                />
                <path
                  fill="#FFB672"
                  d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5ZM42 36H39.75Z"
                />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.25"
                  stroke="#FF8413"
                  d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5M42 36H39.75"
                />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={3}
                  stroke="#FF8413"
                  d="M34.512 22.5H34.4982"
                />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.25"
                  stroke="#FF8413"
                  d="M27.75 21.75L26.25 23.25"
                />
              </svg>
              <div>
                <span>Cheese Burger</span>
                <p>Extra Spicy</p>
                <p>No mayo</p>
              </div>
              <div className="quantity">
                <button>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M20 12L4 12"
                    />
                  </svg>
                </button>
                <label>2</label>
                <button>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M12 4V20M20 12H4"
                    />
                  </svg>
                </button>
              </div>
              <label className="price small">$23.99</label>
            </div>
          </div>
        </div>
        <div className="card coupons">
          <label className="title">Apply coupons</label>
          <form className="form">
            <input
              type="text"
              placeholder="Apply your coupons here"
              className="input_field"
            />
            <button>Apply</button>
          </form>
        </div>
        <div className="card checkout">
          <label className="title">Checkout</label>
          <div className="details">
            <span>Your cart subtotal:</span>
            <span>47.99$</span>
            <span>Discount through applied coupons:</span>
            <span>3.99$</span>
            <span>Shipping fees:</span>
            <span>4.99$</span>
          </div>
          <div className="checkout--footer">
            <label className="price">
              <sup>$</sup>57.99
            </label>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .master-container {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
  }

  .card {
    width: 400px;
    background: #ffffff;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .title {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #efeff3;
    font-weight: 700;
    font-size: 11px;
    color: #63656b;
  }

  /* cart */
  .cart {
    border-radius: 19px 19px 7px 7px;
  }

  .cart .products {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .cart .products .product {
    display: grid;
    grid-template-columns: 60px 1fr 80px 1fr;
    gap: 10px;
  }

  .cart .products .product span {
    font-size: 13px;
    font-weight: 600;
    color: #47484b;
    margin-bottom: 8px;
    display: block;
  }

  .cart .products .product p {
    font-size: 11px;
    font-weight: 600;
    color: #7a7c81;
  }

  .cart .quantity {
    height: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 7px;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  }

  .cart .quantity label {
    width: 20px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2px;
    font-size: 15px;
    font-weight: 700;
    color: #47484b;
  }

  .cart .quantity button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: none;
    background-color: transparent;
    padding-bottom: 2px;
  }

  .card .small {
    font-size: 15px;
    margin: 0 0 auto auto;
  }

  .card .small sup {
    font-size: px;
  }

  /* coupons */
  .coupons {
    border-radius: 7px;
  }

  .coupons form {
    display: grid;
    grid-template-columns: 1fr 80px;
    gap: 10px;
    padding: 10px;
  }

  .input_field {
    width: auto;
    height: 36px;
    padding: 0 0 0 12px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }

  .coupons form button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 100%;
    height: 36px;
    background: linear-gradient(180deg, #4480ff 0%, #115dfc 50%, #0550ed 100%);
    box-shadow: 0px 0.5px 0.5px #efefef, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 5px;
    border: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
  }

  /* Checkout */
  .checkout {
    border-radius: 9px 9px 19px 19px;
  }

  .checkout .details {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 10px;
    gap: 5px;
  }

  .checkout .details span {
    font-size: 13px;
    font-weight: 600;
  }

  .checkout .details span:nth-child(odd) {
    font-size: 11px;
    font-weight: 700;
    color: #707175;
    margin: auto auto auto 0;
  }

  .checkout .details span:nth-child(even) {
    font-size: 13px;
    font-weight: 600;
    color: #47484b;
    margin: auto 0 auto auto;
  }

  .checkout .checkout--footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 20px;
    background-color: #efeff3;
  }

  .price {
    position: relative;
    font-size: 22px;
    color: #2b2b2f;
    font-weight: 900;
  }

  .price sup {
    font-size: 13px;
  }

  .price sub {
    width: fit-content;
    position: absolute;
    font-size: 11px;
    color: #5f5d6b;
    bottom: 5px;
    display: inline-block;
  }

  .checkout .checkout-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 36px;
    background: linear-gradient(180deg, #4480ff 0%, #115dfc 50%, #0550ed 100%);
    box-shadow: 0px 0.5px 0.5px #efefef, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 7px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
`;

export default OrderForm;

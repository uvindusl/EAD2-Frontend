import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input
          className="input"
          name="text"
          type="text"
          placeholder="Search the World Best Pizaa..."
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-container {
    position: relative;
    width: 100%;
    max-width: 270px;
  }

  .input {
    width: 100%;
    height: 60px;
    padding: 12px;
    font-size: 18px;
    font-family: "Arial", sans-serif; /* Changed font from Courier New to Arial */
    color: #ff6b00;
    background-color: #fff;
    border: 4px solid #ff6b00;
    border-radius: 0;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 8px 8px 0 #ff6b00;
  }

  .input::placeholder {
    color: #ffa866;
  }

  .input:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #ff6b00;
  }

  .input:focus {
    background-color: #ff6b00;
    color: #fff;
    border-color: #ffc299;
  }

  .input:focus::placeholder {
    color: #fff;
  }

  .input-container::after {
    content: "|";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #ff6b00;
    animation: blink 0.7s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .input:focus + .input-container::after {
    color: #fff;
  }

  .input:not(:placeholder-shown) {
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export default SearchBar;

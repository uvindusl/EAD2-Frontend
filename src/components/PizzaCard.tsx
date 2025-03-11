import styled from "styled-components";

interface Food {
  id: number;
  picture: string; // Base64 string for the image
  name: string;
  price: number;
}

interface PizzaCardProps {
  food: Food;
}

function PizzaCard({ food }: PizzaCardProps) {
  // Create a proper data URI from base64 string
  const imageSource = food.picture
    ? `data:image/jpeg;base64,${food.picture}`
    : "/placeholder.png";

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image">
          <img
            src={imageSource}
            alt={food.name}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>
        <div className="heading">
          {food.name}
          <div className="author">${food.price}</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    background: white;
    padding: 0.4em;
    border-radius: 6px;
  }

  .card-image img {
    width: 100%;
    height: 130px;
    border-radius: 6px 6px 0 0;
    object-fit: cover;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 11px;
    padding-top: 20px;
  }
`;

export default PizzaCard;

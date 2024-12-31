// src/components/ProductCard.jsx


import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100">
      <div className="card-img-wrapper">
        <Card.Img
          variant="top"
          src={product.image} // Keep the src for the image
          alt={product.name}
          className="product-image"
          loading="lazy" // Use the loading attribute for lazy loading
        />
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>{product.price.toFixed(2)}</strong>
          <br />
          <small className="text-muted">{product.category}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-80' // Увеличили ширину до w-80 (320px)
    >
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-64 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
        <p className='text-gray-700'>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

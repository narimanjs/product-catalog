import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <button
        onClick={() => navigate("/")}
        className='mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg'
      >
        Вернуться к списку
      </button>
      <div className='bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-80'>
        {" "}
        <img
          src={`${process.env.PUBLIC_URL}/${product.image}`}
          alt={product.name}
          className='w-full h-80 object-cover'
        />
        <div className='p-6'>
          <h1 className='text-3xl font-semibold mb-4'>{product.name}</h1>
          <p className='text-gray-700 mb-6'>{product.description}</p>
          <p className='text-2xl font-bold'>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

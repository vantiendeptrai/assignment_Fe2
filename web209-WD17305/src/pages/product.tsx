import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "@/api/product";
import { IProduct } from "@/interface/product";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  return (
    <div>
      <h2>{product!.name}</h2>
      <p>{product!.description}</p>
      <img src={product!.image} alt="" />
      {/* Other product details */}
    </div>
  );
};

export default ProductDetailPage;

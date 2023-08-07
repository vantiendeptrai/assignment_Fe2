import { Row, Col, Card as AntCard } from "antd";
import React, { useEffect } from "react";
import { useGetProductsQuery } from "@/api/product";
import { IProduct } from "@/interface/product";

const CustomCard = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto grid grid-cols-3 gap-4">
      {products.map((product: IProduct) => (
        <div key={product.id} className="">
          <AntCard
            hoverable
            cover={<img alt={product.name} src={product.image} />}
          >
            <AntCard.Meta
              title={product.name}
              description={product.description}
            />

            <AntCard.Meta title={product.price} description={product.price} />
          </AntCard>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;

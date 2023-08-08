// import { Row, Col, Card as AntCard } from "antd";
// import React, { useEffect } from "react";
// import { useGetProductsQuery } from "@/api/product";
// import { IProduct } from "@/interface/product";
// import { Link } from "react-router-dom";

// const CustomCard = () => {
//   const { data: products = [], isLoading, isError } = useGetProductsQuery();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading products</div>;
//   }

//   return (
//     <div className="max-w-screen-xl px-4 py-16 mx-auto grid grid-cols-3 gap-4">
//       {products.map((product: IProduct) => (
//         <div key={product.id} className="">
//           <AntCard
//             hoverable
//             cover={<img alt={product.name} src={product.image} />}
//           >
//             <AntCard.Meta
//               title={product.name}
//               description={product.description}
//             />
//             <AntCard.Meta title={product.price} description={product.price} />
//             <Link to={`/products/${product.id}`}>View Details</Link>
//           </AntCard>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomCard;



import React from "react";
import { Card as AntCard } from "antd";
import { useGetProductsQuery } from "@/api/product";
import { IProduct } from "@/interface/product";
import { Link } from "react-router-dom";

const CustomCard = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product: IProduct) => (
        <div key={product.id} className="flex justify-center">
          <AntCard
            hoverable
            className="w-full max-w-xs overflow-hidden rounded-lg shadow-md"
            cover={<img alt={product.name} src={product.image} />}
          >
            <div className="px-4 py-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <Link
                  to={`/products/${product.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </AntCard>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;




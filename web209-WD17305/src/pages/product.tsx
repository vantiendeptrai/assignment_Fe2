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
      <div className="m-auto p-auto box-border w-[1423px]">
        <div className="shadow-lg shadow-indigo-200/50 py-[10px]">
          <span className="pl-[30px] ml-[130px]">Trang chủ</span>
          <span className="pl-[30px] ">Điện thoại</span>
          <span className="pl-[30px] ">Samsung</span>
          <span className="pl-[30px] ">Sammung Galaxy A73 (5G) 256GB</span>
        </div>

        <div className="mt-[10px] py-[10px]">
          <span className="ml-[160px] font-bold">{product!.name}</span>
          <div className=" mt-[10px]">
            <hr />
          </div>
        </div>

        {/* sản phẩm */}
        <div className="my-[40px] ml-[130px] flex">
          <div>
            <div className="mb-[20px]">
              <img src={product!.image} alt="" className="w-[450px]" />
            </div>
            <div className="w-[100px] flex pl-[30px]">
              <div className="ml-[50px] mt-[10px]">
                <button className="bg-[red] w-[233px] h-[48px] rounded text-white ">
                  Mua Ngay
                </button>
              </div>

              <div className="ml-[30px] w-[100px] flex inline-block">
                <img
                  src="\public\Shopping-cart.png"
                  alt=""
                  className="w-[40px] h-[40px] border-4 my-[14px] px-[5px] rounded-[10px]"
                />
                <span className="w-[100px] text-[13px] text-center my-[13px] ">
                  Thêm vào giỏ hàng
                </span>
              </div>
            </div>
          </div>

          <div className="w-[680px]">
            <div className="flex mb-[20px]">
              <p className="text-[red] font-semibold text-[26px]">
                {product!.price}
                <u>đ</u>
              </p>
              <p className="pl-[20px] mt-[12px]">
                {product!.price}
                <u>đ</u>
              </p>
            </div>
            <div>
              <span>
                {" "}
                Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản
                A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang
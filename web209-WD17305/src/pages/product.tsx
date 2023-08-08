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
                đến cảm giác sang trọng và tinh tế.
              </span>
            </div>
          </div>
        </div>

        {/* đặc điểm SẢN PHẨM */}
        <div className="w-[1100px] mx-[160px]">
          <div className="bg-[#F2F2F2] mb-[13px] py-[20px]">
            <h1 className="text-center text-red-500 font-bold">
              ĐẶC ĐIỂM NỔI BẬT
            </h1>
            <p className="ml-[20px] pt-[5px]">
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </p>
            <p className="ml-[20px] pt-[5px]">
              Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch,
              độ phân giải Full HD+, 120Hz mượt mà
            </p>
            <p className="ml-[20px] pt-[5px]">
              Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon
              778G, RAM lên đến 8 GB
            </p>
            <p className="ml-[20px] pt-[5px]">
              Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
              hỗ trợ sạc nhanh 25 W
            </p>
          </div>

          <div className="mt-[15px] mb-[29px]">
            <span>
              Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai
              là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp
              tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và
              cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều
              cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao
              nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
            </span>
          </div>

          <div className="mb-[30px]">
            <h2 className="font-bold">
              Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
            </h2>
            <span>
              Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
              đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
              biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về
              chiếc
            </span>
          </div>

          <div>
            <h2 className="font-bold">
              Thiết kế sang trọng, màn hình Super AMOLED
            </h2>
            <span>
              Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan
              tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo
              nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang
              trọngvà tinh tế. Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu
              chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ
              đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ
              đâu, bất cứ lúc nào. Kích thước và trọng lượng của chiếc điện
              thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích
              trong túi xách và có thể di chuyển dễ dàng.
            </span>
          </div>
          <button className="w-[350px] h-[40px] text-center border-2 rounded-xl translate-x-80 mt-[20px]">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

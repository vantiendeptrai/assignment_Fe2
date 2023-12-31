import { AiOutlineUser } from "react-icons/ai";
import { Avatar, Space } from "antd";
import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  const type = false;
  return (
    <header className="grid grid-cols-3 bg-gray-700	 py-4 justify-between ">
      <img src="" alt="" />

      <input
        type="text"
        className="rounded-[20px] pl-4 mr-4"
        placeholder="Tìm kiếm sản phẩm"
      />

      <span className="flex gap-2 items-center">
        <Space direction="vertical" size={16}>
          <Link to="signin">
            <Space wrap size={16}>
              <Avatar
                size="large"
                icon={<AiOutlineUser />}
                className="p-[6px]"
              />
            </Space>
          </Link>
        </Space>
        {type ? (
          <h1 className="flex">
            chào bạn<h2>nam</h2>
          </h1>
        ) : (
          <Link to="signup">đăng ký</Link>
        )}
      </span>
    </header>
  );
};

export default Header;

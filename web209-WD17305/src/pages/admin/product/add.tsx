import { useState } from "react"; // Add this import
import { useAddProductMutation } from "@/api/product";
import { Button, Checkbox, Form, Input, Upload, Image } from "antd"; // Add Upload and Image
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
type FieldType = {
  name?: string;
  price?: string;
  image?: string;
  description?: string;
};

const AdminProductAdd = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const navigate = useNavigate();

  // State to hold the selected image file
  const [imageFile, setImageFile] = useState<File | null>(null);

  const onFinish = (values: any) => {
    // You may want to add the selected image file to the values object here.
    // For example: values.image = imageFile;
    addProduct(values)
      .unwrap()
      .then(() => {
        navigate("/admin/product");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // Function to handle image file selection
  const handleImageUpload = (file: File) => {
    setImageFile(file);
  };

  return (
    <>
      <header className="mb-4">
        <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
      </header>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Giá sản phẩm" name="price">
          <Input />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item<FieldType> label="Hình ảnh" name="image">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Giá sản phẩm" name="description">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Thêm sản phẩm"
            )}
          </Button>
          <Button
            className="ml-2"
            type="primary"
            danger
            htmlType="submit"
            onClick={() => navigate("/admin/product")}
          >
            Quay lại
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

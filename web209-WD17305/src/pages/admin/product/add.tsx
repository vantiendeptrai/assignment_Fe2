import React from 'react';
import { Form, Button, Input } from 'antd'
import { IProduct } from '@/interface/product';
type FieldType = {
    name: string,
    price: number,
    image: string
}

const AdminAdd = () => {
    const onFinish = (values: IProduct) => {
        console.log(values)
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Tên sản phẩm"
                name="name"
                rules={[{ required: true, message: 'Vui lòng  nhập tên' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Giá sản phẩm"
                name="price"
                rules={[{ required: true, message: 'Vui lòng nhập Giá sản phẩm' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<FieldType>
                label="Hình ảnh"
                name="image"
                rules={[{ required: true, message: 'Vui lòng nhập Giá sản phẩm' }]}
            >
                <Input />

            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AdminAdd
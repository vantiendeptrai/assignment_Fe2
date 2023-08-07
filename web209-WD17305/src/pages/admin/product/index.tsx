import React from 'react';
import { Table, Button, Skeleton, Popconfirm, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
import { IProduct } from '@/interface/product';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from 'react';


type Props = {};

const AdminProduct = (props: Props) => {
    const [searchText, setSearchText] = useState<string>('');

    const { data: productData, error, isLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();

    const dataSource = productData?.map(({ id, name, price, image, description }: IProduct) => ({
        key: id,
        name,
        price,
        image,
        description
    }));
    const filteredDataSource = dataSource?.filter((record) =>
        Object.keys(record).some(
            (key) =>
                typeof record[key] === 'string' &&
                record[key].toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const confirm = (id: number | string) => {
        removeProduct(id);
    };

    const columns = [
        {
            title: 'Tên Sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            sorter: (a: any, b: any) => a.price - b.price, // Custom sorter function
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (image: string) => <img src={image} alt="Product" style={{ width: '100px' }} />,
        },
        {
            title: 'Đánh giá',
            dataIndex: 'description',
            key: 'description',
            render: (rating: number) => {
                // Customize the display of the rating here, for example, you can use stars/icons.
                return <span>{rating}</span>;
            },
        },
        {
            title: '',
            render: ({ key: id }: any) => (
                <>
                    <div className="flex space-x-4">
                        <Popconfirm
                            title="Xóa nhé, đừng hối hận"
                            description="Bạn có muốn xóa không?"
                            onConfirm={() => confirm(id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>
                                {isRemoveLoading ? (
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                ) : (
                                    'Xóa'
                                )}
                            </Button>
                        </Popconfirm>
                        <Button type="primary" danger>
                            <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                        </Button>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Quản lí sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>

            <Input.Search
                placeholder="Tìm kiếm sản phẩm"
                onSearch={(value: string) => setSearchText(value)}
                style={{ marginBottom: 16 }}
            />

            {/* ... (existing code) */}

            <Table dataSource={filteredDataSource} columns={columns} />
        </div>
    );
};

export default AdminProduct;

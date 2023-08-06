import React from 'react'
import { Table, Button, Skeleton, Popconfirm } from 'antd'
import { Link } from 'react-router-dom';
import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
import { IProduct } from '@/interface/product';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {}

const AdminProduct = (props: Props) => {


    const { data: productData, error, isLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();

    const dataSource = productData?.map(({ id, name, price }: IProduct) => ({
        key: id,
        name,
        price,
    }));
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
        },
        {
            title: '',
            render: ({ key: id }: any) => (
                <>
                    <div className='flex space-x-4 '>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => confirm(id)}

                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger >
                                {isRemoveLoading ? (
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                ) : (
                                    "xóa"
                                )}

                            </Button>

                        </Popconfirm>

                        <button type=" primary" className=' w-[40px] bg-red-500 text-white rounded' danger >
                            <Link to={`admin/product/${id}`}>Sửa</Link>
                        </button>
                    </div>

                </>
            )
        },
    ];


    return (
        <div>
            <header className='mb-4'>
                <h2 className='font-bold text-2xl'>Quản lí sản phẩm</h2>
                <Button type='primary' danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}

        </div>
    )
}

export default AdminProduct
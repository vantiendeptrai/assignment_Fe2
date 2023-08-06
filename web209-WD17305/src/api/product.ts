import { IProduct } from '@/interface/product';
import { pause } from '@/utils/pause';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'producApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000`,
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `products`,
            providesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const { useGetProductsQuery, useRemoveProductMutation } = productApi;
export const productReducer = productApi.reducer;
export default productApi;

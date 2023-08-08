import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000", // Your API base URL for authentication
  }),
  endpoints: (builder) => ({
    register: builder.mutation<any, { username: string; password: string }>({
      query: ({ username, password }) => ({
        url: "/register",
        method: "POST",
        body: { username, password },
      }),
    }),
    login: builder.mutation<any, { username: string; password: string }>({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

// export const { useRegisterMutation, useLoginMutation } = authApi;
export const useRegisterMutation = authApi.endpoints.register.useMutation;
export const authReducer = authApi.reducer;
export default authApi;

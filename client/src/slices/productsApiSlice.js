import { apiSlice } from "./apiSlice.js";
import { PRODUCTS_URL } from "../constants.js";
export const productsApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getProducts: builder.query({
            query: (keyword) => ({
              url: PRODUCTS_URL,
              params: {keyword},
            }),
            keepUnusedDataFor: 5,
        }),
        getProductDetails: builder.query({
            query: productId => ({
              url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
          }),

        createProduct: builder.mutation({
          query: () => ({
            url: PRODUCTS_URL,
            method: "POST",
          }),
        }),
        updateProduct: builder.mutation({
          query: product => ({
            url: `${PRODUCTS_URL}`,
            method: "PUT",
            body: product,
          }),
        }),
        deleteProduct: builder.mutation({
          query: productId => ({
            url: `${PRODUCTS_URL}/${productId}`,
            method: "DELETE",
          }),
        }),
    }),
})
export const {useGetProductsQuery,useGetProductDetailsQuery,useCreateProductMutation,useUpdateProductMutation,useDeleteProductMutation}=productsApiSlice
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"; 

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getProducts: build.mutation({
      query: (data) => ({
        url: "/shop/products",
        method: "GET"
      }),
      invalidatesTags: [tagTypes.products],
    }),
    getProductById: build.query({
      query: (data) => ({
        url: `/shop/product/${data?.id}`,
        method: "GET"
      }),
      providesTags: [tagTypes.products],
    }),
  
  }),
});

export const {
 useGetProductsMutation,
 useGetProductByIdQuery
} = productApi;

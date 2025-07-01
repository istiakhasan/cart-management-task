import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"; 

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (data) => ({
        url: "/categories",
        method: "GET"
      }),
      providesTags: [tagTypes.category],
    }),

  
  }),
});

export const {
 useGetCategoriesQuery
} = categoryApi;

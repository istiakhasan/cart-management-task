import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"; 

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (data) => ({
        url: "/auth/login-desktop",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    getProfileInfo: build.query({
      query: () => ({
        url: "/auth/agent",
        method: "GET"
      }),
      providesTags: [tagTypes.auth],
    }),
   
  }),
});

export const {
 useSignInMutation,
 useGetProfileInfoQuery,
 useChangePasswordMutation
} = authApi;

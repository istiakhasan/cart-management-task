import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
export const transectionApi=baseApi.injectEndpoints({
    endpoints:(build)=>({
        getAllTransection:build.query({
            query:(arg)=>({
                url:`/sms-input/get-transaction-dashboard`,
                method:"GET",
                params:arg
            }),
            providesTags:[tagTypes.transection]
        }),
        updateTransection:build.mutation({
            query:(arg)=>({
                url:`/sms-input/${arg?.id}`,
                method:"PATCH",
                data:arg?.data
            }),
            invalidatesTags:[tagTypes.transection]
        }),
    })
})
export const {useGetAllTransectionQuery,useUpdateTransectionMutation}=transectionApi

import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const dashboardApi=baseApi.injectEndpoints({
    endpoints:(build)=>({
        getDashboardOverView:build.query({
            query:(data)=>({
                url:'/sms-input/overview-dashboard',
                method:'GET',
                params:data,
            }),
            providesTags:[tagTypes.dashboard]
        }),
        getDashboardSummary:build.query({
            query:(data)=>({
                url:'/sms-input/dashboard-summary',
                method:'GET',
                params:data,
            }),
            providesTags:[tagTypes.dashboard]
        }),
    })
})



export const {
useGetDashboardOverViewQuery,
useGetDashboardSummaryQuery
}=dashboardApi
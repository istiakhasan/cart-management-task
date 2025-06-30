import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"; 

export const issuesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllIssues: build.query({
      query: (arg) => ({
        url: "/issues/dashboard",
        method: "GET",
        params: arg
      }),
      providesTags: [tagTypes.issues],
    }),
    getIssueById: build.query({
      query: (data) => ({
        url: `/issues/${data?.id}`,
        method: "GET"
      }),
      providesTags: [tagTypes.issues],
    }),
    getTransectionByIssueId: build.query({
      query: (data) => ({
        url: `/transaction-log/${data?.id}`,
        method: "GET"
      }),
      providesTags: [tagTypes.issues],
    }),
    updateIssue: build.mutation({
      query: (data) => ({
        url: `/issues/${data?.id}`,
        method: "PATCH",
        data:data?.data
      }),
      invalidatesTags: [tagTypes.issues],
    }),
  }),
});

export const {
    useGetAllIssuesQuery,
    useGetIssueByIdQuery,
    useUpdateIssueMutation,
    useGetTransectionByIssueIdQuery
} = issuesApi;

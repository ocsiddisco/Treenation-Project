import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const treenationApi = createApi ({
    reducerPath: 'treenationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tree-nation.com/api' }),
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => `/projects?status=active`,
        }),
        getAll: builder.query({
            query: (id) => `/projects/${id}/species`,
        }),
        getDetails: builder.query({
            query: (id) => `/species/${id}`,
        })
    })
})

export const { useGetProjectsQuery, useGetAllQuery, useGetDetailsQuery } = treenationApi;
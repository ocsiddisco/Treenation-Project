import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProjects,
  OneProjectAllTrees,
  OneTree
} from "../Types/ApiResponses";

export const treenationApi = createApi({
  reducerPath: "treenationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://tree-nation.com/api" }),
  endpoints: (builder) => ({
    getProjects:
      builder.query <AllProjects[], void>({query: () => `/projects?status=active`}),
    getAll:
      builder.query <OneProjectAllTrees[], string>({
        query: (id) => `/projects/${id}/species` }),
    getDetails:
      builder.query <OneTree, string>({query: (id) => `/species/${id}`}),    
  }),
});

export const { useGetProjectsQuery, useGetAllQuery, useGetDetailsQuery } =
  treenationApi;

// // Need to use the React-specific entry point to allow generating React hooks
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

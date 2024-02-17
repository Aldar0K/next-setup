import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = process.env.__API_URL__;

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.__API_URL__,
  prepareHeaders: (headers, { getState }) => headers
});

export const baseApi = createApi({
  baseQuery,
  endpoints: build => ({})
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.__API_URL__,
  prepareHeaders: (headers, { getState }) => headers
});

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: build => ({})
});

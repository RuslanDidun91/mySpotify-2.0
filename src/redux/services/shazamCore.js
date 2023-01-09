// utility functions comming from redux toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fc96a349admshcfacfe4928c8982p1de8e6jsn0ee11469fbfd',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
 
//boilerplate object to make fetch from store
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'fc96a349admshcfacfe4928c8982p1de8e6jsn0ee11469fbfd');
      return headers;
    },
  }),
  //using endpoints as a hook later
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/world'}),
    getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
    getSongRelated: builder.query({query:({songid}) => `/tracks/related?track_id=${songid}`})
  }),
});

export const {
  useGetTopChartsQuery, 
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi
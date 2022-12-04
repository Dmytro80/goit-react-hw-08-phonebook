import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery(),

  tagTypes: ['Contacts'],
  endpoints(build) {
    return {
      getContacts: build.query({
        query: () => ({ url: '/contacts', method: 'get' }),
        providesTags: ['Contacts'],
      }),
      mutation: build.mutation({
        query: () => ({ url: '/mutation', method: 'post' }),
      }),
      addContact: build.mutation({
        query: contact => ({
          url: '/contacts',
          method: 'POST',
          data: contact,
        }),
        invalidatesTags: ['Contacts'],
      }),
      deleteContact: build.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],
      }),
    };
  },
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

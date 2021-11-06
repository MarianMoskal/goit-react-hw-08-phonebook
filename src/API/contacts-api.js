// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { authSelectors } from "redux/auth";
// import axios from "axios";

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: "" }) =>
//   async ({ url, method, data }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: { status: err.response?.status, data: err.response?.data },
//       };
//     }
//   };

// // Define a service using a base URL and expected endpoints
// export const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: axiosBaseQuery({
//     baseUrl: "https://connections-api.herokuapp.com",
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;

//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         console.log(token);
//         headers.set("authorization", `Bearer ${token}`);
//       }

//       return headers;
//     },
//   }),
//   tagTypes: ["Contacts"],
//   endpoints: (build) => ({
//     getContacts: build.query({
//       query: () => ({
//         url: "/contacts",
//         method: "GET",
//       }),
//       //   header: {
//       //   Authorization: `Bearer ${token}`
//       // },
//       providesTags: (result, error, arg) =>
//         result
//           ? [...result.map(({ id }) => ({ type: "Contacts", id })), "Contacts"]
//           : ["Contacts"],
//     }),

//     addContact: build.mutation({
//       query: (body) => ({
//         url: "/contacts",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Contacts"],
//     }),

//     deleteContactById: build.mutation({
//       query: (id) => ({
//         url: `/contacts/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Contacts"],
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactByIdMutation,
// } = contactsApi;

//OLD

// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// export async function fetchContacts() {
//   const { data } = await axios.get();

//   return data;
// }

// export async function postContact(contact) {
//   const options = {
//     method: "POST",
//     data: contact,
//   };

//   const { data } = await axios(options);
//   const res = await data;

//   return res;
// }

// export async function deleteContact(id) {

//   const res = await axios(`/${id}`, { method: "DELETE" });

//   return res;
// }

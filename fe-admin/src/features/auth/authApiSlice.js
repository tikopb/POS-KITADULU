import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/auth/login",
        method: "post",
        body: { ...credentials },
      }),
    }),
  }),
});

//useLoginMutation didapatkan daru use= wajib  login = ikutin yg ada di endpoint mutation = wajib
export const { useLoginMutation } = authApiSlice;

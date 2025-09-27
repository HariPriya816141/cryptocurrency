import {
  createUserWithEmailAndPassword, //creating the new user
  signInWithEmailAndPassword, //logging in the existing user
  onAuthStateChanged, //to track the changes of Auth by user like role, login, logout, etc
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  sendPasswordResetEmail,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../../../firebaseconfig";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//custom logic for opening the pop-up
let getGoogleProvider = () => {
  const provider = new GoogleAuthProvider();
  //to get the pop-up to select an account
  provider.setCustomParameters({ prompt: "Select_account" }); //always prompt
  return provider;
};

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      async queryFn({ email, password }) {
        try {
          let userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          return { data: userCredentials.user };
        } catch (error) {
          return { err: { message: error.message } };
        }
      },
    }),
    loginUser: builder.mutation({
      async queryFn({ email, password }) {
        try {
          let userLoginCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          return { data: userLoginCredentials.user };
        } catch (error) {
          return { err: { message: error.message } };
        }
      },
    }),
    googleLogin: builder.mutation({
      async queryFn() {
        try {
          const provider = new GoogleAuthProvider();
          let result = await signInWithPopup(auth, provider);
          const isNewUser = getAdditionalUserInfo(result)?.isNewUser;

          return { data: { user: result.user, isNewUser } };
        } catch (error) {
          return { err: { message: error.message } };
        }
      },
    }),
    logoutUser: builder.mutation({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: true };
        } catch (error) {
          return { err: { message: error.message } };
        }
      },
    }),
    updateProfile: builder.mutation({
      async queryFn(displayName, photoURL) {
        //getting the data from profile page
        try {
          if (!auth.currentUser) return "No User Found"; //checks if the user exists
          await updateProfile(auth.currentUser, { displayName, photoURL }); //used for updating the name and photo in db
          return { data: { displayName, photoURL } }; //returning the updated value to the ui
        } catch (error) {
          return { err: { message: error.message } };
        }
      },
    }),

    resetPassword: builder.mutation({
      async queryFn({ email }) {
        try {
          await sendPasswordResetEmail(auth, email);

          return { data: true };
        } catch (error) {
          return { err: { message: error.message } };
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGoogleLoginMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
  useLoginUserMutation,
  useUpdateProfileMutation,
} = authApi;

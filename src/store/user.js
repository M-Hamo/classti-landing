import axios from "../api/axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData, encryptData } from "../utils/crypto-js";
import { EndPoints } from "../utils/endPoints";

import schoolIcon from "../assets/icons/fi_763330.svg";
import teacherIcon from "../assets/icons/Owner.svg";
import parentIcon from "../assets/icons/Parent.svg";

export const CurrentUserKey = "current_user";

export const UserType = {
  Admin: 1,
  Teacher: 2,
  Parent: 3,
  SchoolAdmin: 4,
  SchoolOwner: 5,
};

const loginTypesList = [
  {
    value: UserType.SchoolAdmin,
    label: "school",
    desc: "login_sub_desc1",
    sub_desc: "login_subtitle",
    icon: schoolIcon,
  },
  {
    value: UserType.SchoolOwner,
    label: "teacher",
    desc: "login_sub_desc2",
    sub_desc: "login_subtitle",
    icon: teacherIcon,
  },
  {
    value: UserType.Parent,
    label: "parent",
    desc: "login_sub_desc3",
    sub_desc: "login_subtitle_2",
    icon: parentIcon,
  },
];

const initialState = {
  loginTypesList: loginTypesList,
  token: decryptData(localStorage.getItem(CurrentUserKey)) || null,
  countriesList: [],
  attachmentsList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCountriesAsync.fulfilled, (state, action) => {
      state.countriesList = action.payload;
    });
    builder.addCase(getLKAttachesAsync.fulfilled, (state, action) => {
      state.attachmentsList = action.payload;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.token = action.payload?.data?.token;
      localStorage.setItem(CurrentUserKey, encryptData(action.payload?.data?.token));
    });
  },
});

export const getAllCountriesAsync = createAsyncThunk(
  "user/getAllCountriesAsync",
  async () => {
    try {
      const response = await axios.get(EndPoints.publicApis.getAllCountries);
      const countriesList = response.data.value;

      return countriesList;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const getLKAttachesAsync = createAsyncThunk(
  "user/getLKAttachesAsync",
  async () => {
    try {
      const response = await axios.get(EndPoints.publicApis.getLKAttachments);
      const result = response.data.data;

      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  "user/registerUserAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(EndPoints.publicApis.createSchoolOwner, payload);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(EndPoints.publicApis.login, payload);
      const result = response.data;

      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const forgetPasswordAsync = createAsyncThunk(
  "user/forgetPasswordAsync",
  async (payload) => {
    try {
      const response = await axios.post(EndPoints.publicApis.forgetPassword, payload);

      return response.data;
    } catch (error) {
      return Promise.reject(error.response?.data || error.message);
    }
  }
);

export const verifyForgetPassAsync = createAsyncThunk(
  "user/verifyForgetPasswordAsync",
  async (payload) => {
    try {
      const response = await axios.post(
        EndPoints.publicApis.verifyForgetPassword,
        payload
      );

      return response.data;
    } catch (error) {
      return Promise.reject(error.response?.data || error.message);
    }
  }
);

import axios from "../api/axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../utils/endPoints";

import schoolIcon from "../assets/icons/fi_763330.svg";
import teacherIcon from "../assets/icons/Owner.svg";
import parentIcon from "../assets/icons/Parent.svg";

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
  // token: localStorage.getItem("token") || null,
  // user: JSON.parse(localStorage.getItem("user")) || null,
  // isAuthenticated: !!localStorage.getItem("token"),
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

export const registerUserAsync = createAsyncThunk(
  "user/registerUserAsync",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        EndPoints.publicApis.createSchoolOwner,
        registerData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(EndPoints.publicApis.login, loginData);
      const result = response.data.value;

      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
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

export const forgetPasswordAsync = createAsyncThunk(
  "user/forgetPasswordAsync",
  async (forgetPasswordData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        EndPoints.publicApis.forgetPassword,
        forgetPasswordData
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

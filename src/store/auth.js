import { createSlice } from "@reduxjs/toolkit";

import schoolIcon from "../assets/icons/fi_763330.svg";
import teacherIcon from "../assets/icons/Owner.svg";
import parentIcon from "../assets/icons/Parent.svg";

const loginTypesList = [
  {
    value: 1,
    label: "school",
    desc: "login_sub_desc1",
    icon: schoolIcon,
  },
  {
    value: 2,
    label: "teacher",
    desc: "login_sub_desc2",
    icon: teacherIcon,
  },
  {
    value: 3,
    label: "parent",
    desc: "login_sub_desc3",
    icon: parentIcon,
  },
];

const initialState = {
  loginTypesList,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

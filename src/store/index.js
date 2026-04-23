import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// A simple UI slice to manage theme, language, or modal states
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'dark',
    sidebarOpen: false,
    language: 'en',
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const { toggleTheme, setLanguage } = uiSlice.actions

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
})

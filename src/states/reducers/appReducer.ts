import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  header: AppHeaderState;
};

export type AppHeaderState = {
  visible: boolean;
  title: string;
  showBackButton: boolean;
};

const initialState: AppState = {
  header: {
    visible: true,
    title: '',
    showBackButton: false,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHeaderAction: (state, action: PayloadAction<AppHeaderState>) => {
      state.header = {
        ...state.header,
        ...action.payload,
      };
    },
  },
});

export const { setHeaderAction } = appSlice.actions;

export const appReducer = appSlice.reducer;

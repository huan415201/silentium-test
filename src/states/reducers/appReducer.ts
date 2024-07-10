import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  header: AppHeaderState;
  globalLoadingIndicator: AppLoadingState;
};

export type AppHeaderState = {
  visible: boolean;
  title: string;
  showBackButton: boolean;
};

export type AppLoadingState = {
  isLoading: boolean;
};

const initialState: AppState = {
  header: {
    visible: true,
    title: '',
    showBackButton: false,
  },
  globalLoadingIndicator: {
    isLoading: false,
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
    setGlobalLoadingAction: (state, action: PayloadAction<AppLoadingState>) => {
      state.globalLoadingIndicator = {
        ...state.globalLoadingIndicator,
        ...action.payload,
      };
    },
  },
});

export const { setHeaderAction, setGlobalLoadingAction } = appSlice.actions;

export const appReducer = appSlice.reducer;

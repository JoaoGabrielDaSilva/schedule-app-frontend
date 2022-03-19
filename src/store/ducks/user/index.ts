import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoogleUser, User } from "../../../components/models/User";
import { SaveUserInfo, SaveGoogleUserInfo } from "../model/Payloads";

type UserState = {
  info?: User | GoogleUser;
};

const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserInfo: (
      state,
      action: PayloadAction<{ info: SaveUserInfo | SaveGoogleUserInfo }>
    ) => {
      const { info } = action.payload;

      return { ...state, info };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { saveUserInfo, logout } = userSlice.actions;

export default userSlice.reducer;

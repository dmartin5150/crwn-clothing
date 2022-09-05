import { createSelector } from "reselect";
import { User_State } from "./user.reducer";
import { RootState } from "../store";

const selectUserReducer = (state:RootState):User_State => state.user;


export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (currentUserSlice) => currentUserSlice.currentUser
);

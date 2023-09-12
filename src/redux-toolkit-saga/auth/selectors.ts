import { RootState } from "store/store";

export const authUserSelector = (state: RootState) => state.auth.user;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types/user.model';

export interface AuthState {
	user?: IUser;
}

const initialState: AuthState = {
	user: undefined
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signIn: (state: AuthState, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
		signOut: (state: AuthState) => {
			state.user = undefined;
		}
	}
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;

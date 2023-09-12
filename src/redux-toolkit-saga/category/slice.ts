import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ICreateCategoryRequest } from 'types/api/category.model';
import { IListRequest } from 'types/api/common-request.model';
import { prefix } from './constants';

export interface CategoryState {
	categories?: ICategory[];
	loading: boolean;
	requestInfo: any;
}

const initialState: CategoryState = {
	categories: undefined,
	loading: false,
	requestInfo: undefined
};

// Actions
export const getCategoriesAct = createAction<IListRequest>(
	`${prefix}/get-categories`
);
export const createCategoryAct = createAction<ICreateCategoryRequest>(
	`${prefix}/creare-category`
);

export const categorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		updateLoading: (state: CategoryState, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		updateList: (state: CategoryState, action: PayloadAction<ICategory[]>) => {
			state.categories = action.payload;
		},
		updateRequestInfo: (state: CategoryState, action: PayloadAction<any>) => {
			state.requestInfo = action.payload;
			state.loading = false;
		}
	}
});

export const { updateLoading, updateList, updateRequestInfo } =
	categorySlice.actions;
export default categorySlice.reducer;

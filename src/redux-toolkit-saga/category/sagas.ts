import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';
import { createCategory, getCategories } from 'services/category-api';
import {
	ICreateCategoryRequest,
	ICreateCategoryResponse
} from 'types/api/category.model';
import { IListRequest } from 'types/api/common-request.model';
import {
	ResponseGenerator
} from 'types/api/common-response.model';
import {
	createCategoryAct,
	getCategoriesAct,
	updateList,
	updateLoading,
	updateRequestInfo
} from './slice';

function* getCategoriesSaga(action: PayloadAction<IListRequest>) {
	try {
		yield put(updateLoading(true));
		const response: ICreateCategoryResponse = yield getCategories(
			action.payload
		);
		yield put(updateList(response.data));
		yield put(
			updateRequestInfo({
				action: action,
				success: response
			})
		);
	} catch (error) {
		yield put(
			updateRequestInfo({
				action: action,
				error: error
			})
		);
	}
}
function* createCategorySaga(action: PayloadAction<ICreateCategoryRequest>) {
	try {
		yield put(updateLoading(true));
		const response: ResponseGenerator<any> = yield createCategory(
			action.payload
		);
		yield put(
			updateRequestInfo({
				action: action,
				success: response
			})
		);
	} catch (error) {
		yield put(
			updateRequestInfo({
				action: action,
				error: error
			})
		);
	}
}
export default function* categorySaga() {
	yield all([takeLatest(getCategoriesAct.type, getCategoriesSaga)]);
	yield all([takeLatest(createCategoryAct.type, createCategorySaga)]);
}

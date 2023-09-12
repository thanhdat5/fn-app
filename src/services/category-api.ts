import { APP_ENDPOINTS } from 'constants/endpoints';
import axiosClient from 'library/axios/axiosClient';
import { ICategory, ICreateCategoryRequest } from 'types/api/category.model';
import { IListRequest } from 'types/api/common-request.model';
import {
	ResponseGenerator,
	ResponseListGenerator
} from 'types/api/common-response.model';

export const getCategories = (params: IListRequest) => {
	return axiosClient
		.get<ResponseListGenerator<ICategory>>(
			`${APP_ENDPOINTS.CATEGORIES}?page=${params.page}&limit=${params.limit}`
		)
		.then(res => {
			return res.data;
		}) as ReturnType<typeof axiosClient.get<ResponseListGenerator<ICategory>>>;
};
export const createCategory = (params: ICreateCategoryRequest) => {
	return axiosClient
		.post<ResponseGenerator<any>>(APP_ENDPOINTS.CATEGORIES, params)
		.then(res => {
			return res.data;
		}) as ReturnType<typeof axiosClient.get<ResponseGenerator<any>>>;
};

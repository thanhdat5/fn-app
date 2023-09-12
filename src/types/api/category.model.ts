export interface ICategory {
	_id: string;
	name: string;
}
export interface ICreateCategoryRequest {
	name: string;
}

export interface ICreateCategoryResponse {
	message: string;
	data: ICategory[];
}

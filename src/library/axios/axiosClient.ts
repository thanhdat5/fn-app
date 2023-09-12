import axios from 'axios';
import { APP_ROUTES } from 'constants/route';
import { APP_STORAGES } from 'constants/storage';
import HttpConfig from './http-config';
import { errorInterceptor } from './http-error.interceptor';
const axiosClient = axios.create({
	baseURL: HttpConfig.BASE_URL,
	...HttpConfig.DEFAULT_CONFIG
});

axiosClient.interceptors.request.use(function (request) {
	const token = `Bearer ${localStorage.getItem(APP_STORAGES.ACCESS_TOKEN)}`;
	request.headers.Authorization = token;

	return request;
});
//response interceptor handler
axiosClient.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status === 401) {
			//Unauthorized
			localStorage.clear();
			console.log('Logout...');
			window.location.href = APP_ROUTES.LOGIN;
		}
		if (error.response.status === 403) {
			//Forbiden
		}
		return errorInterceptor(error);
	}
);

export default axiosClient;

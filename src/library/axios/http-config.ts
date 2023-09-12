export default class HttpConfig {
	public static BASE_URL =
		process.env.REACT_APP_API_URL
			? 'https://dev.gizedao.com'
			: 'https://dev.gizedao.com';
	public static DEFAULT_CONFIG = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
}

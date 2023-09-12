import { all, fork } from 'redux-saga/effects';
import { reducer as category, saga as categorySaga } from './category';
import { reducer as auth } from './auth';

export const rootReducer = {
	category,
	auth
};

export function* rootSaga() {
	yield all([fork(categorySaga)]);
}

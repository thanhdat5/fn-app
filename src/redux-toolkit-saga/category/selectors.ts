import { RootState } from "store/store";

export const categoryLoadingSelector = (state: RootState) => state.category.loading;
export const categoryListSelector = (state: RootState) => state.category.categories;
export const categoryRequestInfoSelector = (state: RootState) => state.category.requestInfo;
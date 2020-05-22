import {
    createSelector
} from 'reselect'

const GetDirectory = (state) => state.shop;

export const GetAllShopItems = createSelector(
    [GetDirectory],
    shop => shop.collections
);
export const GetAllForPreview = createSelector(
    [GetAllShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const SelectCollection = collectionUrlParam => createSelector(
    [GetAllShopItems],
    collections => collections ? collections[collectionUrlParam] : null
)


export const selectFetching = createSelector(
    [GetDirectory],
    shop => shop.isFetching
)
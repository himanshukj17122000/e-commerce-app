import {
    createSelector
} from 'reselect'
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
const GetDirectory = (state) => state.shop;

export const GetAllShopItems = createSelector(
    [GetDirectory],
    shop => shop.collections
);

export const SelectCollection = collectionUrlParam => createSelector(
    [GetAllShopItems],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)
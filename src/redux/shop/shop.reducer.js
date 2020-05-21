import {
    SHOP_DATA
} from './shop.data'

import ShopActionTypes from './shop.types'
const INITIAL_SHOP = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_SHOP, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
            default:
                return state
    }
}

export default shopReducer;
import {
    SHOP_DATA
} from './shop.data'

const INITIAL_SHOP = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_SHOP, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer;
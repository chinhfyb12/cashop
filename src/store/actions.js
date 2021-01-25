export const showCartModal = () => {
    return {
        type: 'SHOW_CART_MODAL',
    }
}
export const showSearch = () => {
    return {
        type: 'SHOW_SEARCH'
    }
}
export const sendPathProduct = (pathProduct) => {
    return {
        type: 'SEND_PATH_PRODUCT',
        pathProduct
    }
}
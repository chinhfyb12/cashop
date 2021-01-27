const initialState = []

export default (state = initialState, { type, cart }) => {
    switch (type) {

    case 'SEND_PRODUCTS_CART':
        return state = [...cart]

    default:
        return state
    }
}

const initialState = false

export default (state = initialState, { type }) => {
    switch (type) {
    case "SHOW_CART_MODAL":
        return !state

    default:
        return state
    }
}

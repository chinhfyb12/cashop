const initialState = false

export default (state = initialState, { type }) => {
    switch (type) {
    case "SHOW_CART_MODEL":
        console.log(state)
        return !state

    default:
        return state
    }
}

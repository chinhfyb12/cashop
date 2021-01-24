const initialState = false

export default (state = initialState, { type }) => {
    switch (type) {

    case 'SHOW_SEARCH':
        return !state

    default:
        return state
    }
}

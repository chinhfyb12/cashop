const initialState = null

export default (state = initialState, { type, pathProduct }) => {
    switch (type) {

    case 'SEND_PATH_PRODUCT':
        return state = pathProduct

    default:
        return state
    }
}

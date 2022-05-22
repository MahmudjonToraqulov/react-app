initialState = 0
const plsMns = (state = initialState,action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload
            break;
        case "DECREMENT":
            return state - action.payload
            break;
    
        default:
            return state
            break;
    }
}

export default plsMns


const initState = {
    isLoading: false
}
type initialStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: actionType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): actionType => ({type: "CHANGE-LOADING", isLoading} as const) // fix any

type actionType = {
    type: string,
    isLoading: boolean
}
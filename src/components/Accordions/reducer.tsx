type ActionType = {
    type: string,
}
export const Toggle_collapsed = "Toggle-collapsed"

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
//     if (action.type === Toggle_const) {
//         return !state
//     }
//     return state
// }
    switch (action.type) {
        case Toggle_collapsed:
            return {...state, collapsed: !state.collapsed};
            //верни state c перезатёртым значением collapsed:!state.collapsed
        default:
            throw new Error(`Unhandled action type ${action.type}`)
        //         генерация ошибки если задали неправильный action
    }
}
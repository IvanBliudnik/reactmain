type ActionType = {
    type: string,
}
export const Toggle_const = "Toggle-collapsed"
export const reducer = (state: boolean, action: ActionType) => {
//     if (action.type === Toggle_const) {
//         return !state
//     }
//     return state
// }
    switch (action.type) {
        case Toggle_const:
            return !state;
        default:
            throw new Error(`Unhandled action type ${action.type}`)
        //         генерация ошибки если задали неправильный action
    }
}
import {UncontrolledRatting} from "./UncontrolledRatting";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRatting',
    component: UncontrolledRatting
}
const callback = action("Rating changed inside component")

export const EmptyStar = () => {
    return <UncontrolledRatting defaultValue={0} onChange = {callback}/>
}
export const Rating1 = () => {
    return <UncontrolledRatting defaultValue={1} onChange = {callback}/>
}
export const Rating2 = () => {
    return <UncontrolledRatting defaultValue={2} onChange = {callback}/>
}
export const Rating3 = () => {
    return <UncontrolledRatting defaultValue={3} onChange = {callback}/>
}
export const Rating4 = () => {
    return <UncontrolledRatting defaultValue={4} onChange = {callback}/>
}
export const Rating5 = () => {
    return <UncontrolledRatting defaultValue={5} onChange = {callback}/>
}

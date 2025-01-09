import React from "react";
import {Clocks} from "../Clocks";



export default {
    title: 'Clocks',
    component: Clocks
}


export const BaseAnalogExample = () => {
    return <Clocks mode={"analog"}/>
}
export const BaseDigitalExample = () => {
    return <Clocks mode={"digital"}/>
}

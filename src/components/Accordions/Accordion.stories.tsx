import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from "react";



export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action("Accordion mode changed")

export const CollapsedMode = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                        collapsed={true}
                        onClick={callback}/>
}

export const OpenedMode = () => {
    return <Accordion titleValue={"Opened Accordion"}
                        collapsed={false}
                        onClick={callback}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Accordion titleValue={"AccordionDemo"}
                        collapsed={collapsed}
                        onClick={()=> {setCollapsed(!collapsed)}}/>
}
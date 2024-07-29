import { action } from '@storybook/addon-actions';
import { Accordion1v } from './Accordion1v';
import { useState } from "react";



export default {
    component: Accordion1v
}
const OnClickHandler = action("onClick")

export const CollapsedAccordion1v = () => {
    return <Accordion1v titleValue={"Collapsed Accordion"}
                        collapsed={true}
                        onClick={()=>{
                            console.log("Collapsed Accordion 1v");
                        }}/>
}

export const OpenedAccordion1v = () => {
    return <Accordion1v titleValue={"Opened Accordion"}
                        collapsed={false}
                        onClick={()=>{}}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Accordion1v titleValue={"AccordionDemo"}
                        collapsed={collapsed}
                        onClick={()=> {setCollapsed(!collapsed)}}/>
}
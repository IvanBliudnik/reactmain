import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action("Accordion mode changed")
const onClickCallback = action("some item was clicked")

export const CollapsedMode = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      onClick={onClickCallback}
                      items={[]} onChange={callback}/>
}

export const OpenedMode = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      onClick={onClickCallback}
                      onChange={callback}
                      items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Victor", value: 3}]}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Accordion titleValue={"AccordionDemo"}
                      collapsed={collapsed}
                      onClick={(value) => {
                          alert(`user with id ${value} should be happy`)
                      }}
                      onChange={() => setCollapsed(!collapsed)}
                      items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Victor", value: 3}]}/>
}
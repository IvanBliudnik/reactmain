
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select
}

const callback = action("Select mode changed")
const onClickCallback = action("some item was clicked")

export const CollapsedMode = () => {
    return <Select value={"Collapsed Accordion"}
                      collapsed={true}
                      onClick={onClickCallback}
                      items={[]}
                      onChange={callback}/>
}

export const OpenedMode = () => {
    return <Select value={"Opened Accordion"}
                      collapsed={false}
                      onClick={onClickCallback}
                      onChange={callback}
                      items={[{title: "Minsk", value: 1}, {title: "Moscow", value: 2}, {title: "Kiev", value: 3}]}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Select value={"SelectDemo"}
                      collapsed={collapsed}
                      onClick={(value) => {
                          alert(`Your choice is ${value}`)
                      }}
                      onChange={() => setCollapsed(!collapsed)}
                      items={[{title: "Minsk", value: 1}, {title: "Moscow", value: 2}, {title: "Kiev", value: 3}]}/>
}
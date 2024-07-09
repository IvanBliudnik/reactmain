import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
    // collapsed?: boolean
    // onChange?: () => void
}

export function UnControlledAccordion({titleValue}: UnControlledAccordionPropsType) {
    console.log('UnControlledAccordion rendering');
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div>
            <UnControlledAccordionTitle title={titleValue}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type UnControlledAccordionTitlePropsType = {
    title: string
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    console.log('UnControlledAccordionTitle');

    return (
        <h3>---{props.title}----</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody');

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};
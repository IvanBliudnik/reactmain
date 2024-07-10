import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion({titleValue}: UnControlledAccordionPropsType) {
    console.log('UnControlledAccordion rendering');
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div>
            <UnControlledAccordionTitle title={titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type UnControlledAccordionTitle = {
    title: string, //props который мы передали от UnControlledAccordion сверху
    onClick: () => void, //props который мы передали от UnControlledAccordion сверху
}

function UnControlledAccordionTitle({title, onClick}: UnControlledAccordionTitle) {
    console.log('UnControlledAccordionTitle');
    return (
        <h3 onClick={()=>{onClick()}}>---{title}----</h3>
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
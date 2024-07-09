import {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering');

    let [collapsed, setCollapsed] = useState(false)

    // const onClickHandler = () => {
    //     setCollapsed(!collapsed);
    // }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
            {/*<AccordionBody/>*/}
        </div>
    )

    type AccordionTitlePropsType = {
        title: string
        onClick: ()=>void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log('AccordionTitle');
        return (
            <h3 onClick={()=>{props.onClick()}}>---{props.title}----</h3>
        )
    };

    function AccordionBody() {
        console.log('AccordionBody');
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
}


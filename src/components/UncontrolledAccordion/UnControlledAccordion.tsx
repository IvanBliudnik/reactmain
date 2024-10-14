import React, {useReducer, useState} from "react";
import {reducer, Toggle_const} from "../Accordions/reducer";

type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion({titleValue}: UnControlledAccordionPropsType) {
    console.log('UnControlledAccordion rendering');
    let [state, dispatch] = useReducer(reducer, {collapsed:false})
    return (
        <div>
            <UnControlledAccordionTitle title={titleValue} onClick={()=> {dispatch({type:Toggle_const}) }}/>
            {!state.collapsed && <AccordionBody/>}
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
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
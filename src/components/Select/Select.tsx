import React from "react";


type ItemType = {
    title: string;
    value: any;
}

type SelectPropsType = {
    value: any
    onChange: () => void
    items: Array<ItemType>,
    onClick: (value:any) => void,
    collapsed: boolean,
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <SelectTitle title={props.value} onChange={props.onChange}/>
            {/*При клике на заголовок вызывается функция props.onClick с противоположным значением collapsed (если был свернут, то развернет, и наоборот).*/}
            {!props.collapsed && <SelectBody items={props.items} onClick={props.onClick}/>}
            {/*    Если collapsed равно false, рендерит AccordionBody.*/}
        </div>
    )
    // return (
    //     <div>
    //         <div>{}</div>
    //         {props.items.map((item: any, index: number) => <div>{item.title}</div>)}
    //     </div>
    // );
}
type SelectTitlePropsType = {
    title: string
    onChange: () => void
}

function SelectTitle(props: SelectTitlePropsType) {
    console.log('Select Title');
    return (
        <h3 onClick={(event) => props.onChange()}>---{props.title}----</h3>
    )
}

type SelectBodyPropsType = {
    items: Array<ItemType>,
    onClick: (value:any) => void,
}

function SelectBody(props: SelectBodyPropsType) {
    console.log('SelectBody');

    return (<ul>
            {props.items.map((item, index) => (<li onClick={() => {
                props.onClick(item.value)
            }} key={index}>{item.title}</li>))}
        </ul>
    )
};
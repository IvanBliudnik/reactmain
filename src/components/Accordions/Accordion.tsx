import React from "react";

type ItemType = {
    title: string;
    value: any;
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: () => void
    items: Array<ItemType>,
    onClick: (value: any) => void,
}

const AccordionBody = React.memo(AccordionBodySecret)

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    // let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {/*При клике на заголовок вызывается функция props.onClick с противоположным значением collapsed (если был свернут, то развернет, и наоборот).*/}
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            {/*    Если collapsed равно false, рендерит AccordionBody.*/}

        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle');

    return (
        <h3 onClick={() => props.onChange()}>---{props.title}----</h3>
        //Рендерит заголовок h3, который при клике вызывает props.onClick.
        //     При клике на заголовок (AccordionTitle), вызывается функция props.onClick в Accordion1v, которая изменяет состояние collapsed на противоположное.
        // Это приводит к повторному рендерингу компонента Accordion1v с новым значением collapsed, что в свою очередь изменяет видимость AccordionBody.
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemType>,
    onClick: (value: any) => void,
}

export function AccordionBodySecret(props: AccordionBodyPropsType) {
    console.log('AccordionBody');

    return (<ul>
            {props.items.map((item, index) => (<li onClick={() => {
                props.onClick(item.value)
            }} key={index}>{item.title}</li>))}
        </ul>
    )
}

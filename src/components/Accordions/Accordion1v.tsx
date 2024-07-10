type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onClick: (value: boolean) => void,
}

export function Accordion1v(props: AccordionPropsType) {
    console.log('Accordion1v rendering');
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{props.onClick(!props.collapsed)} }/>
            {/*При клике на заголовок вызывается функция props.onClick с противоположным значением collapsed (если был свернут, то развернет, и наоборот).*/}
            {!props.collapsed && <AccordionBody/>}
        {/*    Если collapsed равно false, рендерит AccordionBody.*/}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle');

    return (
        <h3 onClick={props.onClick}>---{props.title}----</h3>
    //Рендерит заголовок h3, который при клике вызывает props.onClick.
    //     При клике на заголовок (AccordionTitle), вызывается функция props.onClick в Accordion1v, которая изменяет состояние collapsed на противоположное.
        // Это приводит к повторному рендерингу компонента Accordion1v с новым значением collapsed, что в свою очередь изменяет видимость AccordionBody.
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
